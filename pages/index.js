import react, { useState, useEffect } from 'react'
import { Post } from "../components"
import axios from 'axios'
import style from '../styles/main.module.scss'
const Home = ({ posts }) => {

  return (
    <div>
      <div className="container">
        <div className={style.main}>
          <div className={style.main__top}>
            
          </div>
          <div className={style.main_content}>
            <ul className={style.items}>

              {posts.map((item, i) => (<Post
                key={item._id}
                id={item._id}
                image={item.image}
                title={item.title}
                description={item.description}
                content={item.content}
                author={item.author}
              />))}
            </ul>
          </div>
        </div>

        <div className={style.aside_right}>
          <div className={style.aside_right_top}></div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { data } = await axios.get('http://localhost:3001/post')

  return {
    props: { posts: data }
  }
}

export default Home;