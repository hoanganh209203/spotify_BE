import playlistModel from "../models/playlist.model.js"


export const getPlayList = async(req,res) =>{
    try {
      const data = await playlistModel.find().populate('genres')
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"No playlist found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}

export const getPlayListById = async(req,res) =>{
    try {
        const id = req.params.id
        console.log(id);
      const data = await playlistModel.findById(id).populate('genres')
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"No playlist found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}

export const createPlaylist= async(req,res) =>{
    try {
      const data = await playlistModel.create(req.body)
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"No playlist found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}
export const updatePlaylist = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await playlistModel.findByIdAndUpdate(id,req.body,{new:true});
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"No playlist found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}
export const removePlaylist = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await playlistModel.findByIdAndDelete(id,{new:true});
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"No playlist found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}