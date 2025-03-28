import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
}

BlogLink.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
}

export { BlogLink }
