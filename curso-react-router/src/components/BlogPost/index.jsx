import { useNavigate, useParams } from "react-router-dom"
import { blogData } from "../../utils/blogdata"
import { useAuthContext } from "../../hooks"
import { useState } from "react"

const BlogPost = () => {
  const navigate = useNavigate() 
  const {auth} = useAuthContext()
  const { slug } = useParams()
  
  const blogPost = blogData.find((post) => post.slug === slug) 

  const [newText, setNewText] = useState(blogPost.content)

  const canDelete = auth.user?.rol === 'admin' || blogPost.author === auth.user?.username
  const canEdit = auth.user?.rol === 'admin' || auth.user?.rol === 'editor' || blogPost.author === auth.user?.username

  const returnToBlog = () => {
    navigate('/blog')
  }

  const onEdit = (title) => {
    const newBlogs = [...auth.blogs]
    const blogIndex = newBlogs.findIndex(blog => blog.title === title)
    newBlogs[blogIndex].content = newText
    auth.setBlogs(newBlogs)
  }
  const onDelete = (title) => {
    const newBlogs = [...auth.blogs]
    const blogIndex = newBlogs.findIndex(blog => blog.title === title)
    newBlogs.splice(blogIndex, 1)
    auth.setBlogs(newBlogs)
    navigate('/blog')
  }

  return (
    <>
      <h2>{blogPost.title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{blogPost.author}</p>
      <p>{blogPost.content}</p>

      {canEdit && (
        <div>
          <textarea 
            onChange={(e) => setNewText(e.target.value)}
            value={newText}
          ></textarea>
          <button onClick={() => onEdit(blogPost.title)}>Editar</button>
        </div>
      )}

      { canDelete && (
        <div>
          <button onClick={() => onDelete(blogPost.title)}>Eliminar</button> 
        </div>
      )}
    </>
  )
}

export { BlogPost }