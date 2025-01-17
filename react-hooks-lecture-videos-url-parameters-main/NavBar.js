import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
        <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            </nav>
    )
}


export default NavBar;