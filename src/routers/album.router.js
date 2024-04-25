import express from 'express';
import { createAlbum, getAlbum, getAlbumId, removeAlbum, updateAlbum } from '../controllers/album.controller.js';

const routerAlbum = express.Router();

routerAlbum.get('/',getAlbum)
routerAlbum.get('/:slug',getAlbumId)
routerAlbum.post('/',createAlbum)
routerAlbum.put('/:id',updateAlbum)
routerAlbum.delete('/:id',removeAlbum)

export default routerAlbum