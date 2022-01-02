/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
import useFetch from './customHooks/useFetch'
import BlogList from './BlogList';
import Categorie from './Categorie';

const Home = () => {
    
     const {data:blogs ,loading,error} = useFetch("http://localhost:8000/blogs");
 
   
    return ( 
        <div className="container">
            <div className="row mt-2">
               <div className="col-md-7 ">
                {error && <div className="alert alert-dismissible alert-danger">
                <strong>{error}</strong>  try submitting again.
                </div>}
                {loading && <div>Loading ...</div>}
                {/* conditional templete get afficher data when we have data  */}
               {blogs && <BlogList blogs={blogs} title = "All Blogs" />}
             
              </div>
              <div className="col-md-3 offset-md-2">
               <Categorie></Categorie>
             
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