import { Outlet } from "react-router-dom";
import { BlogLink } from "../BlogLink";
import { useAuthContext } from "../../hooks";

const BlogPage = () => {
	const {auth} = useAuthContext()

  return (
	<>
		<h1>BlogPost</h1>	

		<Outlet />

		<ul>
			{auth.blogs.map((post) => (
				<BlogLink 
					key={post.slug}
					post={post}
				/>
			))}
		</ul>
	</>
  );
};

export { BlogPage };