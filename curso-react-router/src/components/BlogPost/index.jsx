import { useNavigate, useParams } from "react-router-dom"
import { blogData } from "../../utils/blogdata"
import { useAuthContext } from "../../hooks"

const BlogPost = () => {
  const navigate = useNavigate() 
  const {auth} = useAuthContext()
  const { slug } = useParams()

  const blogPost = blogData.find((post) => post.slug === slug) 
  
  const canDelete = auth.user?.isAdmin || blogPost.author === auth.user.username

  const returnToBlog = () => {
    navigate('/blog')
  }

  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>

      { canDelete && <button>Editar</button> }
    </>
  )
}

export { BlogPost }