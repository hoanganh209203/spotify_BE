import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    albumId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"album"
    },
    artists:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"artist"
        }
    ],
    external_urls:{
        spotify:{
            type:String,
        }
    },
    href:{
        type:String,
    },
    name:{
        type:String,
    },
    popularity:{
        type:Number
    },
    track_number:{
        type:Number
    }
})

export default mongoose.model('track',trackSchema)