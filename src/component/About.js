import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container mt-3 text-center">
        <h2>About </h2>
     
        <div className="text-center mt-2"> 
        <Link className=" btn btn-primary " to="/">Go to Home Page</Link>
   
        </div>
      
      </div>
    );
}

export default About;