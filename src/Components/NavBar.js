import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar-div">            
            <ul className="nav-ul">
                <li className="navbar-link">
                    <Link to="/">Home</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/bars">Drinks</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/treats">Treats</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/map">Map</Link>
                </li>

                {/* <li className="navbar-link">
                    <Link to="/prizes">Prizes</Link>
                </li> */}

                <li className="navbar-link">
                    <Link to="/crawl">Crawl</Link>
                </li>

                <li className="navbar-link">
                    <Link to="/nna">The NNA</Link>
                </li>

            </ul>
        </div>
    )
}

export default NavBar;