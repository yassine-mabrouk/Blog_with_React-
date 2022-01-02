import { Link, useHistory} from "react-router-dom"
      
const BlogList = ({title,blogs}) => {

     const history =useHistory();
     
  const deleteBlog = (id) => {
      console.log(id)
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 

 }

    return (
      <div className="blogList">
              <h3  className="text-center mt-2 mb-2">{title}</h3>
     {blogs.map((blog)=> (
        
           <div className="list-group" key={blog.id}>
            <div className="list-group-item  flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{blog.title}</h5>
            <small className="text-muted">3 days ago</small>
            <button type="button" className="btn btn-danger" onClick={()=> deleteBlog(blog.id)} >
          delete 
          </button>
            </div>
            <p className="lead"> <strong> Description:</strong> {blog.body}</p>
            <small className="text-muted"><strong> Created by :</strong> {blog.author}</small> 
        
                  <div className="text-center mt-2"> <Link className=" btn btn-primary " to={`/blogs/${blog.id}`}>Show More</Link></div>
            </div>
            </div>
           
           
              ))}
       </div>
      );
}

export default BlogList;