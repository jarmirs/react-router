import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <Link to ="/">Home</Link>
          <Link to= "/about">About</Link>
          <Link to= "/profile">Profile</Link>
        </nav>
      </div>
    );
}

export default Navbar