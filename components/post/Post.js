import Link from "next/link"
import style from './post.module.scss'

const Post = ({ title, description, author, image, id }) => {
  return (
    <Link href={`/post/${id}`}>
      <div className={style.item}>
        <div className={style.item_left}>
          <div className={style.item_top}>
            <div className={style.icon}><img alt="chao huang" src="https://miro.medium.com/fit/c/30/30/1*7eynZkUlXrB7sh2HZs26jw.jpeg" width="24" height="24" /></div>
            <span className={style.text}>{author}</span>
            <span className={style.date}>Feb 28</span>
          </div>
          <div className={style.item_center}>
            <h2 className={style.title}>{title}</h2>
            <p className={style.description}>{description.slice(0, 200)}...</p>
          </div>
          <div className={style.item_down}>
            <div className={style.tags}>JavaScript</div>
            <span className={style.time_read}>3 min read</span>
          </div>
        </div>

        <div className={style.item_right}>
          <img className={style.item_right_image} alt="8 Super Useful JavaScript Tips" src={image} />
        </div>
      </div>
    </Link>
  )
}

export default Post;