import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Router from './src/routers/index.router.js'

const app = express()
const port = 8080
app.use(cors())
app.use(express.json());
Router(app)
mongoose.connect('mongodb://127.0.0.1:27017/spotify_api')
   .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

