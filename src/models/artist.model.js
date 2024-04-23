import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    followers: {
        href: {
            type: String
        },
        total: {
            type: Number
        }
    },
    genres:[ {
            type: mongoose.Schema.Types.ObjectId,
            ref: "genres"
        }],
    tracks:[ {
            type: mongoose.Schema.Types.ObjectId,
            ref: "track"
        }],
    album:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "album"
    },
    images: {
        type: String,
    },
    banner: {
        type: String,
    },
   
    popularity: {
        type: Number,
    }
}, {
    timestamps: true,
    versionKey: false
})
export default mongoose.model('artist', artistSchema)