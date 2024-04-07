import mongoose from "mongoose";

const myAlbumSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    item:[
        {
            musiceId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'track'
            }
        }
    ]
},{
    timestamps:true,
    versionKey:false
})

export default mongoose.model('myalbum',myAlbumSchema)