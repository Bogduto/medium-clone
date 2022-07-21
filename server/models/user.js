// create user in mongodb

import mongoose from 'mongoose'
import PostModel from './post.js';


const createUser = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true
    },
    ownPosts: {
        type: Array,
        required: false,
    },
})

export default mongoose.model("Users", createUser)

