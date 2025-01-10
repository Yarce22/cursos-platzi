import { blogData } from "../../utils/blogdata";
import { BlogLink } from "../BlogLink";

const BlogPage = () => {
  return (
	<>
		<h1>BlogPost</h1>

		<ul>
			{blogData.map((post) => (
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