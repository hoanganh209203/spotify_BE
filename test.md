import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Router from './src/routers/index.router.js'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'
const app = express()
const router = express.Router()
const port = 9000
var spotifyApi = new SpotifyWebApi({
  clientId: '77c88c308ca34be7a63604322fbf2cfb',
  clientSecret: 'f78001af1dac439c852ef53b7138ef55',
  redirectUri: 'http://localhost:9000/callback'
});
const token ="BQDq2rb3NgoXTUjAcxBiwQp5kq2D86kBbug87iTjQiACQE7xt-D-nMW0DUCiv6_KPgNtHjGP2h8BlCy6PtOBIvaC5eAmhbkfaGeNh2CmQ9yssOM0rP76eC2BgrQPkm7B7Kiud3VA1i0-YnMKCUwVT8iR5_uWeJB0bbaU93mkONcXCSXc9FqeewiD2ZSjtFHULnsDr46UeeuDegfJ52NEb6_4xcr_F7g_q0sj9Nc4XFSBQLWG0ERBHG7OCbCwnKUYe8kkgIphkx0bBMGt-CilHvY1H-zn3Hgn2oelhqHHvZz5EgpWAXJzLMLh4iflBlq7vlW5gbtPQb1__Ggwy5GX"

router.get('/', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL([
    "ugc-image-upload",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "app-remote-control",
    "playlist-modify-public",
    "user-modify-playback-state",
    "playlist-modify-private",
    "user-follow-modify",
    "user-read-currently-playing",
    "user-follow-read",
    "user-library-modify",
    "user-read-playback-position",
    "playlist-read-private",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "playlist-read-collaborative",
    "streaming"
  ]))
})

// router.get('/callback', (req, res, next) => {
//   console.log('reqquery', req.query)
//   const code = req.query.code
//   spotifyApi.authorizationCodeGrant(req.query.code).then((response) => {
//     res.send(JSON.stringify(response))
//     spotifyApi.setAccessToken(token)
//   })
// })

spotifyApi.setAccessToken(token)

const getMe = () => {
  spotifyApi.getMe()
      .then(function (data) {
          console.log('Some information about the authenticated user', data.body);
      }, function (err) {
          console.log('Something went wrong!', err);
      });
}
// getMe()

const getPlayList = async () => {
  const data = await spotifyApi.getUserPlaylists("31xaayn2mdexfbslkcuecg6qeeym")
  for (let index = 0; index < data.body.items.length; index++) {
      console.log('data', data.body.items[index])

  }
}
 getPlayList()

// // app.get('/callback', (req, res) => {
// //   const userData = getPlayList()  ;
// //   res.json(userData);
// // });
// const searchArtist = async () => {
//   const artists = await spotifyApi.searchArtists("MTP")
//   console.log('artist', artists)
//   console.log(`bilgiler`, artists.body.artists.items[0])
// }
// searchArtist()


// app.use(cors())
// app.use(express.json());
// Router(app)
// mongoose.connect('mongodb://127.0.0.1:27017/spotify_api')
//    .then(() => console.log('Connected!'));
app.use('/', router)
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})