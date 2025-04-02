import Link from "next/link"
import styles from './Header.module.sass'
import { cookies } from "next/headers"

export const Header = () => {
  const cookiesStore = cookies()
  const token = cookiesStore.get("accessToken")?.value

  if (token) {

  }

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
          {token
            ? <p>Hola!</p>
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