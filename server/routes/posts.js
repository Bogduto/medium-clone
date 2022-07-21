import express from 'express';
import PostModel from '../models/post.js';
import { registerPost } from '../schema/posts-schema.js'
import { validationRequestSchema } from '../middleware/validate.js'
import { createPost, findAllPosts, findOnePost } from '../controllers/postController.js'

const router = express.Router()

// create post
router.post('/createPost', registerPost, validationRequestSchema, createPost)
// find all post
router.get('/post', findAllPosts)
// find one post
router.get('/post/:id', findOnePost)



export default router;