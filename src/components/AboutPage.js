import React from "react";
import { Link} from "react-router-dom";
function AboutPage() {
    return ( 
        <>
    <h3>About</h3>
    <ul>
        <li> Move to page <Link to="/">Home page</Link></li>
        <li> Move to page <Link to="/about">About</Link></li>
    </ul>
    </>
     );
}

export default AboutPage;