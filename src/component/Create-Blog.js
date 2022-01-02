import { useState  } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title,setTitle] =useState("")
    const [author,setAuthor] =useState('')
    const [categorie,setCategorie] =useState("web")
    const [body,setBody] =useState('');
    const history =useHistory()
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author,categorie };
    
        fetch('http://localhost:8000/blogs/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(blog)
        }).then(() => {
          console.log('new blog added');
          history.push("/"); // rediret to home page 
        })
      }
    
    return (
          <div className="container">
               <div className="row mt-3 mb-3">
                   <div className="col-md-6 offset-md-3">
                   <h3 className="text-center"> Create new blog </h3>
              <form onSubmit={handleSubmit}>
                    <fieldset>
                    <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Title</label>
                    <input type="text" class="form-control"  placeholder="Enter title"
                      required
                      value={title}
                      onChange={(e)=> setTitle(e.target.value)}
                    />
                    </div>
                   

                    <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4">Auther</label>
                    <input type="text" class="form-control"  placeholder="Enter name"
                       required
                       value={author}
                       onChange={(e)=> setAuthor(e.target.value)}
                    />

                    </div>

                    <div class="form-group">
                    <label for="exampleSelect1" class="form-label mt-4">Categorie</label>
                    <select class="form-select"
                       required
                       value={categorie}
                       onChange={(e)=> setCategorie(e.target.value)}
                    >
                        <option>Mobile</option>
                        <option>Web</option>
                        <option>AI</option>
                    </select>
                    </div>
                     

                    <div class="form-group ">
                    <label for="exampleTextarea" class="form-label mt-4">Example textarea</label>
                    <textarea class="form-control" rows="3" spellcheck="false"
                     required
                     value={body}
                     onChange={(e)=> setBody(e.target.value)}
                    ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                  </fieldset>

</form>
                   </div>
               </div>
          </div>
    );
}

export default CreateBlog;