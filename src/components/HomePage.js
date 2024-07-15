import React from "react";
import { Link} from "react-router-dom";
function HomePage() {
    return ( 
    <>
    <h3>Main page</h3>
    <ul>
        <li> Move to page <Link to="/">Home page</Link></li>
        <li> Move to page <Link to="/about">About</Link></li>
    </ul>
    </> );
}

export default HomePage;