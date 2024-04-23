import mongoose from 'mongoose'

const AlbumSchema = new mongoose.Schema({

    total_tracks: {
        type: Number,
        required: true
    },//số lượng track
    tracks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'track'
        }
    ],//bài hát
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    artists:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'artist'
    },
    //nghệ sĩ
    color_bg:{
        type: String,
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.model('album', AlbumSchema)