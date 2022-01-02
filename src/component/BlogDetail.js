
import useFetch from "./customHooks/useFetch";
import {  useParams } from "react-router-dom";

const BlogDetail = () => {
    const { id }=useParams();
     const {data:blog ,loading,error} = useFetch("http://localhost:8000/blogs/"+id);
     console.log(blog);

    return (
      <div className="detatil">

            <div className="container">
            <div className="col-md-12">
            <h3  className="text-center mt-2 mb-2">Detail of this Blog </h3>
            {error && <div className="alert alert-dismissible alert-danger">
                <strong>{error}</strong>  try submitting again.
                </div>}
                {loading && <div>Loading ...</div>}
               {blog && (
                    <div class="card mt-5">
                    <div class="card-body">
                        <h4 class="card-title mb-2">{blog.title}</h4>
                        <small className="text-muted">3 days ago</small>
                        <h6 class="card-subtitle mb-2 text-muted "><strong> Created by :</strong> {blog.author}</h6>
                        <p className="mt-5">{blog.body}</p>
                    </div>
                    </div>
               )}
             
         </div>
       </div>  
    
    </div>
    );
}

export default BlogDetail;