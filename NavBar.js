import React from "react";
import { Link } from "react-router-dom";

export default function NavBar()
{
    return (
        <nav> 
            <Link to="/Home">Home </Link>&nbsp;&nbsp;&nbsp;
            <Link to="/About">About</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/Service">Service</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/Contact">Contact</Link>

        </nav>
    )

}