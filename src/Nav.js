import "./App.css";

import { Link } from "react-router-dom";



const Nav=()  =>{
    return (
        <header class="nav">
        <h1 class="largeT">News</h1> 
        
        <ul class="ul-nav">
          
          <li class="li-nav"><Link to="/">Add News</Link></li>
          <li class="li-nav"><Link to="/news">Show News</Link></li>
          <li class="li-nav"><Link to="#">Extra</Link></li>
         
        </ul>
      </header>
    );

};

export default Nav;