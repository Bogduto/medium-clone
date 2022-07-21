import { body } from 'express-validator'


const schema = [
    body('name').isString(),
    body('avatar').isString(),
    body('email').isEmail()
]

export { schema as registerUsers }