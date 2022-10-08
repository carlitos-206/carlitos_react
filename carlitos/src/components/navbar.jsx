import React from "react";
import me from "./img/random/me_icon.png"
import Contact from "./contact";

export default function NavBar(){
    const contact = (e) =>{
        e.preventDefault()
        const contact = document.getElementById('contact_from_navBar')
        contact.setAttribute('style', 'display:block')
        let contactForm = document.getElementsByClassName('demo_contact')[0]
        contactForm.setAttribute('style', 'display:none')
    }
    const close = (e) =>{
        e.preventDefault()
        const contact = document.getElementById('contact_from_navBar')
        contact.setAttribute('style', 'display:none')
    }
    return(
        <div className="pure-menu pure-menu-horizontal navBar glow-on-hover">
            <ul className="pure-menu-list">
            {/* <a href="#" class="pure-menu-heading pure-menu-link"><img src={me} alt="brand" id="brandIMG" />s</a> */}
                <li className="pure-menu-item">
                    <a href="#top" class="pure-menu-link"><img src={me} alt="brand" id="brandIMG" /></a>
                </li>
                <li className="pure-menu-item">
                    <a href="#aboutMe" class="pure-menu-link">About Me</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#projects" class="pure-menu-link">Projects</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#resume" class="pure-menu-link">Resume</a>
                </li>
                <li className="pure-menu-item">
                    <a href="#contact" class="pure-menu-link" onClick={(e)=>{contact(e)}}>Contact</a>
                </li>
                {/* <li className="pure-menu-item">
                    <a href="#" class="pure-menu-link">Sign-in/Register</a>
                </li> */}
            </ul>
            <div id="contact_from_navBar" style={{display:'none'}}>
                <a href='#contact'id="contact-exit" onClick={(e)=>{close(e)}}>❌</a>
                <Contact source={'NavBar'} />
            </div>
        </div>
    )
}