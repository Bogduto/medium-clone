import style from './postId.module.scss'
import axios from 'axios';
const Post = ({ post }) => {
    return (
        <div className={style.post}>
            <div className={style.post__top}>
                <span className={style.post__top_created}>Created by <span>{post.author}</span></span>
            </div>
            <div className={style.post__content}>
                <h1 className={style.post__content_title}>{post.title}</h1>
                <div className={style.post__content_title}>
                    <img alt={post.title} src={post.image} width="700" height="258" loading="lazy" role="presentation" />
                </div>

                <div className={style.content} dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    try {
        const { id } = context.query
        const { data } = await axios.get(`http://localhost:3001/post/${id}`)

        return {
            props: { post: data }
        }
    } catch (err) { console.log(err) }
}

export default Post;