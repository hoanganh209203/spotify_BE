import albumModel from "../models/album.model.js"

export const getAlbum = async(req,res) =>{
    try {
      const data = await albumModel.find()
      .populate('tracks')
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

export const getAlbumId = async(req,res) =>{
    try {
        const id = req.params.id
        // console.log(id);
      const data = await albumModel.findById(id).populate('tracks')
      .populate('tracks')
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

export const createAlbum= async(req,res) =>{
    try {
        console.log(req.body);
      const data = await albumModel.create(req.body)
    //   console.log(data);
      if(!data){
        return res.status(404).json({
            message:"Not found"
        })
      }

    //   for(const _id of data.genres){
    //     console.log(_id);
    //     const doc = genresModel.findByIdAndUpdate(_id,{
    //       $addToSet: {
    //                 Albums:_id
    //             }

    //     })
    //   }


      return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message: error.name
        })
    }
}
export const updateAlbum = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await albumModel.findByIdAndUpdate(id,req.body,{new:true});
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
export const removeAlbum = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await albumModel.findByIdAndDelete(id,{new:true});
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