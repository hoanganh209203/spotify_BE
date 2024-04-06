import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    external_urls: {
        spotify: {
            type: String
        }
    },
    followers:{
        href:{
            type: String
        },
        total:{
            type: Number
        }
    },
    genres:[
       { 
        type: mongoose.Schema.Types.ObjectId,
        ref:"genres"
    }
    ],
    images: [
        {
            url:{
                type: String,
            }
        }
    ],
    name:{
        type: String,
    },
    popularity:{
        type: Number,
    },
    types:{
        type: String,
    },
    uri:{
        type: String,
    }
},{
    timestamps:true,
    versionKey:false
})
export default mongoose.model('artist',artistSchema)