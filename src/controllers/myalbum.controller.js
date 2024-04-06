import myAlbumModel from "../models/myAlbum.model.js"

export const myAlbum = async(req,res) =>{
    try {
        const albumId = req.body
        if(!albumId){
            return res.status(400).json({message:"Cart not found"})
        }
        const Album = await myAlbumModel.create(albumId)
        return res.status(200).json({Album})
    } catch (error) {
        return res.status(500).json({message:"Error creating"})
    }
}