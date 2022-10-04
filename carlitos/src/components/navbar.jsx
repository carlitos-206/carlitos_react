import React from "react";
import me from "./img/contact/me_icon.png"
export default function NavBar(){
    return(
        <div className="pure-menu pure-menu-horizontal navBar glow-on-hover">
            <ul className="pure-menu-list">
            {/* <a href="#" class="pure-menu-heading pure-menu-link"><img src={me} alt="brand" id="brandIMG" />s</a> */}
                <li className="pure-menu-item">
                    <a href="#" class="pure-menu-link"><img src={me} alt="brand" id="brandIMG" /></a>
                </li>
                <li className="pure-menu-item">
                    <a href="#aboutMe" class="pure-menu-link">About Me</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#projects" class="pure-menu-link">Projects</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" class="pure-menu-link">Resume</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" class="pure-menu-link">Contact</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#" class="pure-menu-link">Sign-in/Register</a>
                </li>
            </ul>
        </div>
    )
}