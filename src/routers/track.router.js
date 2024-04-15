import express from 'express';
import { createTrack, getTrack, getTrackId, removeTrack, updateTrack } from '../controllers/track.controller.js';
 
const routerTrack = express.Router();

routerTrack.get('/',getTrack)
routerTrack.post('/',createTrack)
routerTrack.get('/:id',getTrackId)
routerTrack.put('/:id',updateTrack)
routerTrack.delete('/:id',removeTrack)

export default routerTrack