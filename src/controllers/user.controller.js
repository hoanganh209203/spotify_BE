import authModel from "../models/auth.model.js"


export const getAuth = async(req, res) =>{
    try {
        const user = await authModel.find()
        if(!user){
            return res.status(400).json({
                message:"Khong tim thay user"
        })
        }
        return res.status(200).json({
            message:"lay danh sach user thanh cong",
            User: user
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}