import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
	<div>
	  <nav>
      <li>
        {routes.map((route) => (
          <NavLink 
            key={route.path}
            to={route.path}
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >{route.text}
          </NavLink>
        ))}
      </li>
    </nav>
	</div>
  );
};

const routes = []

routes.push({ path: '/', text: 'HomePage' });
routes.push({ path: '/blog', text: 'Blog' });
routes.push({ path: '/profile', text: 'Profile' });

export { Menu };