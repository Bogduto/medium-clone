import CreateUser from '../models/user.js'

export const createUser = async (req, res) => {
    try {
        const { name, avatar, email } = req.body
        const doc = new CreateUser({ name, email, avatar })
        await doc.save()
        console.log('user been created')
    } catch (err) {
        console.log(err)
    }
}


export const findUser = async (req, res) => {
    try {
        const user = CreateUser.findOne()
        res.send(user)
    } catch (err) {
        res.status({
            message: 'Не нашел пользователя'
        })
    }
} 