import Link from "next/link"

const Post = ({ id }) => {
  return (
    <Link href={`/post/${id}`}>
      <div className="item">
        <div className="item_left">
          <div className="item_top">
            <div className="icon"><img alt="chao huang" src="https://miro.medium.com/fit/c/30/30/1*7eynZkUlXrB7sh2HZs26jw.jpeg" width="24" height="24" /></div>
            <span className="text">Mario Serano</span>
            <span className="date">Feb 28</span>
          </div>
          <div className="item_center">
            <h2 className="title">Lorem ipsum dolor sit amet.</h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam temporibus officiis repellendus, nemo quae aspernatur nesciunt.
              Voluptates, dolore consequatur nisi commodi quo quaerat.</p>
          </div>
          <div className="item_down">
            <div className="tags">JavaScript</div>
            <span className="time-read">3 min read</span>
          </div>
        </div>

        <div className="item_right">
          <img alt="8 Super Useful JavaScript Tips" src="https://miro.medium.com/fit/c/140/140/1*qZk0Zee2kLp0fis1eoF_Hg.jpeg" width="112" height="112" />
        </div>
      </div>
    </Link>
  )
}



const Home = () => {
  // const yourTopics = ["astronomy", "Immigration", "technology", "programming", "machine learning"]

  return (
    <div className="container">
      <div className="aside_left">
        <div className="aside_left_content">
          <div className="logo">
            <Link href="/">
              <a>
                <svg viewBox="0 0 1043.63 592.71">
                  <g data-name="Layer 2"><g data-name="Layer 1">
                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                  </g></g>
                </svg>
              </a>
            </Link>
          </div>
          <ul className="items">
            <li className="item">
              <Link href="/">
                <a className="item_link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home">
                    <path d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </a>
              </Link>
            </li>
            <li className="item">
              <a className="item_link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications">
                  <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" strokeLinecap="round"></path>
                  <path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" strokeLinejoin="round"></path>
                </svg>
              </a>
            </li>
            <li className="item">
              <a className="item_link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists">
                  <path d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z" stroke="currentColor" strokeLinecap="round"></path>
                  <path d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5" stroke="currentColor" strokeLinecap="round"></path>
                </svg>
              </a>
            </li>
            <li className="item">
              <Link href="/new-story">
                <a className="item_link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write">
                    <path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path>
                    <path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path>
                  </svg>
                </a>
              </Link>
            </li>
          </ul>

          <div className="user">
            <img alt="" src="https://miro.medium.com/fit/c/40/40/0*vXSainWE7Q7tDaFo" />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main_top">
          <div className="topics">
            <div className="topics_icon"><img src="https://img.icons8.com/ios/35/000000/plus--v1.png" /></div>
            <span className="topics_text">Keep up with the latest in any topic</span>
          </div>
        </div>
        <div className="main_content">
          <ul className="items">
            {new Array(1,2,3,4,5,6).map((item, i) => (<Post key={i} id={i} />))}
          </ul>
        </div>
      </div>

      <div className="aside_right">
        <div className="aside_right_top"></div>

      </div>
    </div>
  )
}

export default Home;