import express from 'express'
import { registerUsers } from '../schema/users-schema.js'
import { validationRequestSchema } from '../middleware/validate.js'
import { createUser, findUser } from '../controllers/userController.js'
const router = express.Router()

// create user
router.post('/createUser', registerUsers, validationRequestSchema, createUser)
// find user
router.get('/findUser', findUser)


export default router;