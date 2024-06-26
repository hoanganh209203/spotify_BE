import routerPlaylist from "./playlist.router.js";
import routerGenres from "./genres.router.js";
import routerAuth from "./auth.router.js";
import routerArtist from "./artist.router.js";
import routerTrack from "./track.router.js";
import routerSearch from "./search.router.js";
import routerAlbum from "./album.router.js";

const Router = (app) => {
  app.use("/playlist", routerPlaylist);
  app.use("/artist", routerArtist);
  app.use("/genres", routerGenres);
  app.use("/auth", routerAuth);
  app.use("/album", routerAlbum);
  app.use("/track", routerTrack);
  app.use("/search", routerSearch);
};

export default Router;
