import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import Router from './src/routers/index.router.js'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json());
const port = process.env.PORT
const URL_DB = process.env.URL_DB;
Router(app)
connect(URL_DB);

// mongoose.connect('mongodb://127.0.0.1:27017/spotify_api')
//    .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

