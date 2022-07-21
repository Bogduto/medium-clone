import { body } from 'express-validator'


const schema = [
    body('title').isLength({ min: 10, max: 50 }).isString(),
    body('description').isLength({ min: 10, max: 500 }).isString(),
    body('author').isString(),
    body('image').isString(),
    body('content').isLength({ min: 300, max: 1000 }).isString(),
]

export { schema as registerPost }