/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Home from './component/Home';
import About from './component/About'

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import CreateBlog from './component/Create-Blog';
function App() {
  return (
      <Router>
    <div className="App">
      <Navbar></Navbar>
      <Switch>
      <Route exact path="/">   <Home/> </Route>   
      {/* exact afficher componetn si seulemnt le route est / n'est les url du component childs   */}
          <Route path="/about">  <About/></Route>
     <Route path="/create">
       <CreateBlog> </CreateBlog>
     </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
