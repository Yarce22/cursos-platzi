import { Link, Outlet } from "react-router-dom"

const Dashboard: React.FC = () => {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>

      <ul>
        <li>
          <Link to="overview">Overview</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  )
}

export { Dashboard }