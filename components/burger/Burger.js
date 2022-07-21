import { signOut } from "next-auth/react"
import style from './burger.module.scss';
import Link from "next/link"
const Burger = ({ handleBurgerActive }) => {
  return (
    <div className={style.burger}>
      <div className={style.burger__inner}>
        <ul className={style.burger__inner_items}>
          <li onClick={() => signOut()} className={style.item}><a className={style.item_link}>Sign out</a></li>
          <li className={style.item}><Link href="/new-story"><a className={style.item_link}>write story</a></Link></li>
          <li className={style.item}><a className={style.item_link}>refine recommendation</a></li>
          <li className={style.item}><a className={style.item_link}>manage publication</a></li>
          <li className={style.item}><a className={style.item_link}>Stats</a></li>
          <li className={style.item}><a className={style.item_link}>settings</a></li>
        </ul>

        <div className={style.burger__inner_close} onClick={() => handleBurgerActive()}>
          <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Burger;