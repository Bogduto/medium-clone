import Link from 'next/link'
import { useRouter } from 'next/router';


const Post = () => {
    const { query } = useRouter()

    return (
        <div className='post'>
            <div className="post_top">
                <div className='logo'>
                    <Link href='/'>
                        <a>
                            <svg viewBox="0 0 1043.63 592.71">
                                <g data-name="Layer 2"><g data-name="Layer 1">
                                    <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
                                </g></g>
                            </svg>
                        </a>
                    </Link>
                </div>
                <div className='edit'>
                    <Link href={`edit/${query.id}`}>
                        <a>
                            edit
                        </a>
                    </Link>
                </div>
            </div>
            <div className="post_content">
                <h1 className='title'>React 17 and JSX Transform: Removing one line of code from your Component files</h1>
                <div className='image'>
                    <img alt="" src="https://miro.medium.com/max/875/1*4h79TN4fgwKKdUNomIB4Mg.jpeg" width="700" height="258" loading="lazy" role="presentation" />
                </div>

                <h1 className='title'>Have you ever wondered why you have to import React when you write a functional component?</h1>
                <p className='paragraph'>Depending on your experience level with React this question may be obvious, or you may have just got so used to adding Let's consider the following example:</p>

                <pre className='code'><span id="e19c" data-selectable-paragraph="">import React from 'react';</span><br /><br /><span id="bea2" data-selectable-paragraph="">export const ImABoringComponent = () =&gt; &lt;p&gt; I'm boring! &lt;/p&gt;;</span></pre>

                <h1 className="title">Awesome, what is JSX and why does it look like HTML?</h1>
                <p className='paragraph'>We won't go into the full details of how JSX differs from HTML in this post but in short, JSX is syntactic sugar for</p>
            </div>
        </div>
    )
}


export default Post;