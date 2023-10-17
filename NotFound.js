import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="notFound">
     <h2>Page not found</h2>
     <p>Sorry, the page you are looking for does not exist</p>
     <Link to="/">back to homepage</Link>
    </div>
    )
}

export default NotFound;