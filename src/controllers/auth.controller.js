import authModel from "../models/auth.model.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
export const signUp = async(req, res) =>{
    try {
        const datas = req.body
        console.log(datas);
        const userExit = await authModel.findOne({email: req.body.email})

        if(userExit){
            return res.status(400).json({
                message:"Email ton tai"
            })
        }
        const passwordHashed = await bcrypt.hash(datas.password,10)
        datas.password = passwordHashed

        const token = jwt.sign({user:datas.name,username:datas.email},"123456",{expiresIn:"1h"}) 
        console.log(token);

        const user = await authModel.create({...req.body})
        user.password = undefined
        return res.status(200).json({
            message:"Dang ki thanh cong",
            users:user,
            token
        })
    } catch (error) {
        return res.status(500).json({
            name: error.name,
            message: error.message

        })
    }
}


export const signIn = async(req, res) => {
    try {
        const user = await authModel.findOne({email: req.body.email})
        console.log(user);
        if(!user){
            return res.status(400).json({
                message: 'Email chua duoc dang ki'
            })
        }
        const isMath = await bcrypt.compare(req.body.password, user.password)
        console.log(isMath);
        if(!isMath){
            return res.status(400).json({
                message:"Invalid password"
            })
        }
        const token = jwt.sign({user:user.name,username:user.email},"123456",{expiresIn:"1d"}) 
        console.log(token);
        user.password = undefined
        return res.status(200).json({
            message:"Dang nhap thanh cong",
            user:user._doc,
            token
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}