
import './App.css';


//import { Link } from "react-router-dom";


function Category() {
  return (
    <div>
    <h1 >Add New Post</h1>
    <form class="card" action="/news">
        
        <p class="inp"> Title: <input type="text" id="title" name="title" placeholder="Enter Title" /> </p>
        <p class="inp"> Description <input type="text" id="description" name="description" placeholder="Entr Description" /> </p>
        <p class="inp-btn"> <button> Post News </button> </p>
    </form>
</div>
  );
}

export default Category;
