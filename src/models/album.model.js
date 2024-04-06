import mongoose from 'mongoose'

const AlbumSchema = new mongoose.Schema({
    album_type: {
        type: String,
        required: true
    },
    total_tracks: {
        type: Number,
        required: true
    },
    available_markets: {
        type: String,
        required: true
    },
    external_urls: {
        spotify: {
            type: String,
        }
    },
    href: {
        type: String,
        required: true
    },
    images: [
        {
            url: {
                type: String,
            }
        }
    ],
    name: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
    },
    release_date_precision: {
        type: String,
    },
    artists:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'artists'
            }
        ],
    
})

export default mongoose.model('album',AlbumSchema)