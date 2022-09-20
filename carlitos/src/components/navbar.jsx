import React from "react";

export default function NavBar(){
  return(
    <div class="pure-menu pure-menu-horizontal navBar">
    {/* <a href="#" class="pure-menu-heading pure-menu-link">BRAND</a> */}
    <ul class="pure-menu-list">
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">About Me</a>
        </li>
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Projects</a>
        </li>
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Resume</a>
        </li>
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Contact</a>
        </li>
        <li class="pure-menu-item">
            <a href="#" class="pure-menu-link">Sign-in/Register</a>
        </li>
    </ul>
</div>
  )
}