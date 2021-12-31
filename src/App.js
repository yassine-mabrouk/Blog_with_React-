import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home';
function App() {
  // crattijg new variable 
  const tiltle ="Hello world";
  const nameProdjet= "Blog app";
  // crating objet
   const  user ={ 
    "id": 1, "name": "yassine"
  }
   const gooleSite ="https://google.com"
  return (
    <div className="App">
      <Navbar></Navbar>
       <Home></Home>

    </div>
  );
}

export default App;
