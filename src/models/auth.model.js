import mongoose from "mongoose";

const AuthSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    homeTown:{
        type:String,
    },
    phone:{
        type:String,
    },
    address:{
        type:String,
    }
},{
    timestamps:true,
    versionKey:false
})

export default mongoose.model('user',AuthSchema)