/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from "react";
import BlogList from './BlogList';
const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [loading ,setLoading] =useState(true);

    const [error, setError] = useState(null);
    const deleteBlog = (id)=> {
        const newBlog= blogs.filter((blog)=> blog.id !== id);
        setBlogs(newBlog);
    }
    // use  Effect 
    useEffect (()=> {
        fetch("http://localhost:8000/blogs")
        .then((response)=> {
            console.log(response);
           if(!response.ok){
               throw Error("Error Cannot get data !!!");
           }
            return response.json();
        }
        ).then((data)=>{
            setBlogs(data)
             setLoading(false);
             setError(null);
        })
        .catch ((err) => {
            console.log(err.message);
            setLoading(false);
            setError(err.message);
        })
    },[])

    return ( 
        <div className="container">
            <h1 className="Blog text-center mb-4">Myblog </h1>   
            <div class="row mt-2">
               <div class="col-md-8 offset-md-2">
                {error && <div class="alert alert-dismissible alert-danger">
                <strong>{error}</strong>  try submitting again.
                </div>}
                {loading && <div>Loading ...</div>}
                {/* conditional templete get afficher data when we have data  */}
               {blogs && <BlogList blogs={blogs} title = "All Blogs" deleteBlog={deleteBlog}/>}
              {/* <BlogList blogs={blogs.filter ((blog) => blog.author==="yassine")} title = "Yassine's Blog "/> */}
           
              </div>
        </div>
        </div>
     );
}
 
export default Home;

/*
Note 
the onclick function call the function you sould set just the refrerence of the function 
2) we use hooks for reactive values 
3) the use effect methode executyer dans le lancement du component ou changement dans component
   - used in fetching data 
*/