import { useSession, signIn } from "next-auth/react"
import style from './login.module.scss';

const Login = ({ handleLoginActice }) => {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <div className={style.login}>
            <div className={style.login__wrapper}>
                <h1 className={style.login__wrapper_title}>join medium</h1>

                <button className={style.login__wrapper_btn} onClick={() => signIn()}>Sign in</button>

                <p className={style.login__wrapper_copyright}>
                    Click “Sign Up” to agree to Mediums Terms of Service and acknowledge that Mediums Privacy Policy applies to you.
                </p>
                <span className={style.login__wrapper_close} onClick={() => handleLoginActice()}>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}



export default Login;