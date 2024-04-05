import express from 'express';
import { createGenres, getGenres, getGenresId, removeGenres, updateGenres } from '../controllers/genres.controller.js';
 
const routerGenres = express.Router();

routerGenres.get('/',getGenres)
routerGenres.post('/',createGenres)
routerGenres.get('/:id',getGenresId)
routerGenres.put('/:id',updateGenres)
routerGenres.delete('/:id',removeGenres)

export default routerGenres