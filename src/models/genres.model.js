import mongoose from "mongoose";

const genresSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug:{
        type: String,
    },
    display:{
        bg_color:{
            type: String,
        },
        image:{
            type: String,
        }
    },
    tracks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "track"
        }
    ],
    artist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "artist"
        }
    ]
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('genres', genresSchema)