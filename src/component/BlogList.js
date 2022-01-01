const BlogList = ({title,blogs,deleteBlog}) => {
 
      
    return (
      <div className="blogList">
              <h3  className="text-center mt-2 mb-2">{title}</h3>
     {blogs.map((blog)=> (
        
           <div className="list-group" key={blog.id}>
            <a  className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{blog.title}</h5>
            <small className="text-muted">3 days ago</small>
            <button type="button" className="btn btn-danger" onClick={()=> deleteBlog(blog.id)} >
          delete 
         </button>
            </div>
            <p className="lead">{blog.body}</p>
            <small className="text-muted">{blog.author}</small>
            </a>
            </div>
           
              ))}
       </div>
      );
}

export default BlogList;