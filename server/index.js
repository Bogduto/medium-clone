import express from 'express'
import path from 'path';
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import multer from 'multer';
import 'dotenv/config'

// routes
import posts from './routes/posts.js';
import users from './routes/users.js'


const __dirname = path.resolve();
const app = express();
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static(__dirname))
// app.use(express.static('uploads'))



// upload image
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
})

const upload = multer({storage})

// connect mongodb
mongoose.connect(process.env.MONGO_CLIENT).then(() => console.log('db ok')).catch(e => console.log(e))

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
    console.log('created');
})

// create post || find current post
app.use('/', posts)
app.use('/', users)

app.listen(process.env.SERVER_PORT, (req, res) => {
    console.log(`working on ${process.env.SERVER_PORT} port`);
})