import express from 'express';
import { createPlaylist, getPlayList, getPlayListById, removePlaylist, updatePlaylist } from '../controllers/playlist.controller.js';

const routerPlaylist = express.Router()

routerPlaylist.get('/',getPlayList)
routerPlaylist.get('/:id',getPlayListById)
routerPlaylist.post('/',createPlaylist)
routerPlaylist.put('/:id',updatePlaylist)
routerPlaylist.delete('/:id',removePlaylist)

export default routerPlaylist