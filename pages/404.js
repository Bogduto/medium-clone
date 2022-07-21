import style from '../styles/error.module.scss'

const Error = () => {
    return (
        <div className={style.error}>
            <div className={style.error__content}>
                404 <br /> page not found
            </div>
        </div>
    )
}


export default Error;