const BlogList = (props) => {
    const blogs = props.blogs;
    const title =props.title;
    return (
      <div className="blogList">
              <h3  className="text-center mt-2 mb-2">{title}</h3>
     {blogs.map((blog)=> (
        
           <div className="list-group">
            <a  className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{blog.title}</h5>
            <small className="text-muted">3 days ago</small>
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