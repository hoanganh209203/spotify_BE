import express from "express";
import { createArtist, getArtist, getArtistById, removeArtist, updateArtist } from "../controllers/artist.controller.js";

const routerArtist = express.Router()

routerArtist.get('/',getArtist)
routerArtist.get('/:id',getArtistById),
routerArtist.post('/',createArtist)
routerArtist.put('/:id',updateArtist)
routerArtist.delete('/:id',removeArtist)

export default routerArtist