import Link from 'next/link'
import dynamic from 'next/dynamic'
import ShoppingCart from '../ShoppingCart'
import { validateAccessToken } from 'app/utils/auth/validateAccessToken'
import styles from './Header.module.sass'

const NoSSRShoppingCart = dynamic(() => import("../ShoppingCart"), {
  ssr: false,
})


export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.Header__user}>
        {customer?.firstName
          ? (<p>Hola! {customer.firstName}</p>)
          : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/signup">Sing Up</Link>
            </>
          )}
          <ShoppingCart />
      </div>
    </header>)
}