import { AsideLeft } from '../'
import style from './layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
            <AsideLeft />
            <main className={style.main}>{children}</main>
        </>
    )
}


export default Layout;