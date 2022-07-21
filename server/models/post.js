// create post in mongodb

import mongoose from 'mongoose'


const createPost = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    image: {
        type: Object,
        required:false
    }, 
    author: {
        type:String, 
        required: true
    },
    content: {
        type: String, 
        required: true
    }
})

export default mongoose.model("Posts", createPost)
