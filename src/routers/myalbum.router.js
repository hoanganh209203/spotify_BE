import express from 'express';
import { myAlbum } from '../controllers/myalbum.controller.js';

const routerAlbum = express.Router()

routerAlbum.post('/',myAlbum)

export default routerAlbum