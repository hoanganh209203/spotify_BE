import routerPlaylist from './playlist.router.js';
import routerGenres from './genres.router.js';
import routerAuth from './auth.router.js';
import routerAlbum from './myalbum.router.js';

const Router = (app) =>{
    app.use('/playlist',routerPlaylist)
    app.use('/genres',routerGenres)
    app.use('/auth',routerAuth)
    app.use('/album',routerAlbum)
}


export default Router