import React from "react";

export default function NavBar(){
  return(
    <div className="pure-menu pure-menu-horizontal navBar glow-on-hover">
        {/* <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a> */}
        <ul className="pure-menu-list">
            <li className="pure-menu-item">
                <a href="#" class="pure-menu-link">About Me</a>
            </li>
            <li className="pure-menu-item">
                <a href="#" class="pure-menu-link">Projects</a>
            </li>
            <li className="pure-menu-item">
                <a href="#" class="pure-menu-link">Resume</a>
            </li>
            <li className="pure-menu-item">
                <a href="#" class="pure-menu-link">Contact</a>
            </li>
            {/* <li className="pure-menu-item">
                <a href="#" class="pure-menu-link">Sign-in/Register</a>
            </li> */}
        </ul>
    </div>
    )
}