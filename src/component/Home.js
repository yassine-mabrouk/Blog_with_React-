/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import BlogList from './BlogList';
const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Back End Spring boot ', body: 'lorem ipsum...', author: 'yassine', id: 3 },
        { title: 'fronted with react ', body: 'lorem ipsum...', author: 'yassine', id: 4 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 5 }
      ])
     
    return ( 
        <div className="container">
            <h1 className="Blog text-center mb-4">Myblog </h1>   
            <div class="row mt-2">
               <div class="col-md-8 offset-md-2">
              <BlogList blogs={blogs} title = "All Blogs"/>
              <BlogList blogs={blogs.filter ((blog) => blog.author==="yassine")} title = "Yassine's Blog "/>
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
*/