import Link from "next/link"
import styles from './Header.module.sass'

export const Header = () => {
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
        </ul>
      </nav>
    </header>
  )
}