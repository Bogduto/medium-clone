import { validationResult } from 'express-validator'

export const validationRequestSchema = (req, res, next) => {
    const error = validationResult(req)
    if (!error) {
        res.status(404).json({ error: error.array() })
    }

    next()
}