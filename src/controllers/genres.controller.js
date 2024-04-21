import genresModel from "../models/genres.model.js";


export const getGenres = async(req,res) =>{
    try {
      const data = await genresModel.find()
      
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

export const getGenresId = async(req,res) =>{
    try {
        const id = req.params.id
        // console.log(id);
      const data = await genresModel.findById(id)
    
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

export const createGenres= async(req,res) =>{
    try {
      const data = await genresModel.create(req.body)
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
export const updateGenres = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await genresModel.findByIdAndUpdate(id,req.body,{new:true});
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
export const removeGenres = async(req,res) =>{
    try {
        const id = req.params.id
      const data = await genresModel.findByIdAndDelete(id,{new:true});
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