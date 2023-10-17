import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Yusuph');
  const [isPending, setPending] = useState(false);
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true)
    const blog = {title, body, author};
    fetch('http://localhost:5000/blogs', {
      method:'POST',
      headers:{ "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      alert('Delivered');
      setPending(false)
      history.push('/')
    })
  }
  
  return (
    <div className="create">
     <h2>Add new Blog</h2>
     <form onSubmit= {handleSubmit}>
      <label>Blog title:</label>
      <input 
      type= "text" 
      required
      value= {title}
      onChange={(e) => setTitle(e.target.value)}
      />
      <label>Blog body:</label>
      <textArea
      required
      value= {body}
      onChange={(e) => setBody(e.target.value)}
      ></textArea>
      <label>Blog author:</label>
      <select
      className="select"
      required
      value={author}
      onChange={(e) => setAuthor(e.target.value)}
      >
        <option>Ridwanullah</option>
        <option>Yusuph</option>
        <option>Shuaib</option>
      </select>
      
      { !isPending && <button>Add Blog</button> }
      { isPending && <button disabled>Adding blog</button> }
     </form>
    </div>
    )
}
export default Create;