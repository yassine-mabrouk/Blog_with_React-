import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container mt-3 text-center">
        <h2>Sorry !!</h2>
        <p>That page cannot be found</p>
        <div className="text-center mt-2"> 
        <Link className=" btn btn-primary " to="/">Go to Home Page</Link>
        </div>
      
      </div>
    );
}

export default NotFound;