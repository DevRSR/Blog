import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error} = useFetch('http://localhost:5000/blogs/' + id)
  const history = useHistory();
  
  const handleDelete = () => {
    fetch('http://localhost:5000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      alert('blog deleted');
      history.push('/')
    })
  }
  return (
    <div className= "Blog-detail">
     {error && <div> { error }</div>}
     {isPending && <div>Loading...</div>}
     { blog && (
       <article>
        <h2> { blog.title }</h2>
        <div> { blog.body }</div>
        <p>Written By { blog.author }</p>
        <button onClick={ handleDelete }> delete</button>
       </article>
     )}
    </div>
    )
}

export default BlogDetails;