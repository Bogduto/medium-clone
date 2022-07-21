import PostModel from '../models/post.js';

export const createPost = async (req, res) => {
    try {
        const { title, description, author, image, content } = req.body
        const doc = new PostModel({
            title,
            description,
            author,
            image,
            content
        })

        await doc.save()

        res.send({ success: true })
    } catch (err) {
        res.send({ success: false, message: 'Не удалось создать пост' })
    }
}

export const findAllPosts = async (req, res) => {
    try {
        const post = await PostModel.find()
        res.json(post)
    } catch (err) {
        res.status({
            message: 'Не удалось получить все статьи'
        })
    }
}

export const findOnePost = (req, res) => {
    try {
        const userId = req.params.id
        PostModel.findOne({ _id: userId }, (err, doc) => {
            if (err) return res.status(500).json({ message: 'Не удалось найти пост' })
            if (!doc) return res.status(404).json({ message: 'Статья не найдена' })
            res.json(doc)
        })

    } catch (err) {
        res.status({
            message: 'Не удалось получить статью'
        })
    }
}