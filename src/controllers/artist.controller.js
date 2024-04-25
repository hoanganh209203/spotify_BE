import artistModel from "../models/artist.model.js";
import genresModel from "../models/genres.model.js";


export const getArtist = async(req,res) =>{
    try {
      const limit = req.query.limit;
      const data = await artistModel.find().limit(limit)
      .populate('tracks')
      // console.log(data);
      if(!data){
        return res.status(400).json({
            message:"No artist"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}

export const getArtistById = async(req,res) =>{
    try {
      const slug = req.params.slug
      const data = await artistModel.findOne({slug: slug})
      .populate('tracks')
      .populate('album')
            console.log(data);
      if(!data){
        return res.status(400).json({
            message:"No artist"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}

export const createArtist = async(req,res) =>{
    try {
      console.log(req.body);
      const data = await artistModel.create(req.body)
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"No artist"
        })
      }
      const updateGenres = await genresModel.findByIdAndUpdate(data.genres, {
        $addToSet: {
           artist: data._id
        }
    })
    if (!updateGenres) {
        return res.status(404).json({
            message: "Update genres not found"
        })
    }
    const updateTracks = await genresModel.findByIdAndUpdate(data.tracks, {
      $addToSet: {
         artist: data._id
      }
  })
  if (!updateTracks) {
      return res.status(404).json({
          message: "Update genres not found"
      })
  }
  const updateAlbum = await genresModel.findByIdAndUpdate(data.album, {
    $addToSet: {
       artist: data._id
    }
})
if (!updateAlbum) {
    return res.status(404).json({
        message: "Update genres not found"
    })
}

      return res.status(200).json({
        message:"Thêm thành công",
        artist: data
      })
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}
export const updateArtist = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await artistModel.findByIdAndUpdate(id,req.body,{new:true});
      console.log(data);
      if(!data){
        return res.status(400).json({
            message:"No artist"
        })
      }
      return res.status(200).json({
        message:"Update thành công",
        artist: data
      })
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}
export const removeArtist = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await artistModel.findByIdAndDelete(id,{new:true});
      console.log(data);
      if(!data){
        return res.status(400).json({
            message:"No artist"
        })
      }
      return res.status(200).json({
        message:"Xóa thành công"
      })
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}