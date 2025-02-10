import Link from "next/link"
import style from "./style.module.css"

const Header = () => {
  return (
    <header className={style.Header}>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header