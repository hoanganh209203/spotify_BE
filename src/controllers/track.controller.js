import genresModel from "../models/genres.model.js"
import trackModel from "../models/track.model.js"


export const getTrack = async(req,res) =>{
    try {
      const data = await trackModel.find()
      .populate('artists')
    //   console.log(data);
      if(!data){
        return res.status(404).json({
            message:"Not found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}

export const getTrackId = async(req,res) =>{
    try {
        const id = req.params.id
        // console.log(id);
      const data = await trackModel.findById(id)
      .populate('artists')
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"Not found"
        })
      }
      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}

export const createTrack= async(req,res) =>{
    try {
      const data = await trackModel.create(req.body)
    //   console.log(data);
      if(!data){
        return res.status(404).json({
            message:"Not found"
        })
      }

    //   const updateGenres = await genresModel.findByIdAndUpdate(data.genres, {
    //     $addToSet: {
    //         tracks: data._id
    //     }
    // })
    // if (!updateGenres) {
    //     return res.status(404).json({
    //         message: "Update genres not found"
    //     })
    // }

      for(const _id of data.genres){
        console.log(_id);
        const doc = genresModel.findByIdAndUpdate(_id,{
          $addToSet: {
                    tracks:_id
                }

        })
      }


      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}
export const updateTrack = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await trackModel.findByIdAndUpdate(id,req.body,{new:true});
    //   console.log(data);
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
export const removeTrack = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await trackModel.findByIdAndDelete(id,{new:true});
      console.log(data);
      if(!data){
        return res.status(404).json({
            message:"Not found"
        })
      }
      return res.status(200).json({
        message:"Genres deleted successfully"
      })
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}