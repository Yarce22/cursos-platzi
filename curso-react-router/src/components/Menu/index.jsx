import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks";

const Menu = () => {
  const {auth}  = useAuthContext()

  return (
	<div>
	  <nav>
      <li>
        {routes.map((route) => {
          if (route.private && !auth.user) return null
          if (route.path === '/login' && auth.user) return null
          return(
            <NavLink 
              key={route.path}
              to={route.path}
              style={({ isActive }) => ({
                color: isActive ? "red" : "blue",
              })}
            >{route.text}
            </NavLink>
          )
        })}
      </li>
    </nav>
	</div>
  );
};

const routes = []

routes.push({ path: '/', text: 'HomePage', private: false });
routes.push({ path: '/blog', text: 'Blog', private: false });
routes.push({ path: '/profile', text: 'Profile', private: true });
routes.push({ path: '/logout', text: 'Logout', private: true });
routes.push({ path: '/login', text: 'Login', private: false });

export { Menu };