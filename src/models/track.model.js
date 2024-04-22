import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
    artists: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "artist"
    },
    genres:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genres"
}],
    spotify: {
        type: String,
    },
    //link nhạc
    image: {
        type: String,
    },
    //Link ảnh
    name: {
        type: String,
    },
    color_bg:{
        type: String,
    },
    popularity: {
        type: Number
    },
    //phổ biến
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('track', trackSchema)