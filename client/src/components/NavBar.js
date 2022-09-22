import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "105px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "rgba(77, 73, 73, 0.329)",
    textDecoration: "none",
    color: "rgb(107, 255, 255)",
};

function NavBar() {
    return ( 
    <div>
    <NavLink
        to="/"
        exact
        style={linkStyles}
    >
        Home
    </NavLink>
    <NavLink
        to="/recipes"
        exact
        style={linkStyles}
    >
        Recipes
    </NavLink>
    <NavLink
        to="/addrecipe"
        exact
        style={linkStyles}
        
    >
        Add Recipe
    </NavLink>
    </div>
    )
}

export default NavBar;