import Link from "next/link"
import styles from './Header.module.sass'
import { cookies } from "next/headers"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"

export const Header = async () => {
  const customer = await validateAccessToken()

  return (
    <header className={styles.Header}>
      <h1 className={styles.Header__title}>Future World</h1>
      <nav className={styles.Header__nav}>
        <ul>
          <Link href={'/'}>
            <li>Home</li>
          </Link>
          <Link href={'/store'}>
            <li>Store</li>
          </Link>
          {customer?.firstName
            ? <p>Hola! {customer.firstName}</p>
            : (
              <>
                <Link href={'/login'}>
                  <li>Log In</li>
                </Link>
                <Link href={'/signup'}>
                  <li>Sing up</li>
                </Link>
              </>
            )
          }
        </ul>
      </nav>
    </header>
  )
}