import React from "react";
import me from "./img/random/me_icon.png"
import Contact from "./contact";
import burgerIcon from "./img/random/Hamburger_icon.png"
// import Sun from "./sun";
export default function NavBar({ screenInfo }) {
    const contact = (e) => {
        e.preventDefault()
        const contact = document.getElementById('contact_from_navBar')
        contact.setAttribute('style', 'display:block')
        let contactForm = document.getElementsByClassName('demo_contact')[0]
        contactForm.setAttribute('style', 'display:none')
    }
    const openMobileContact = (e) =>{
        let contact = document.getElementById('contact_from_navBar-mobile')
        contact.setAttribute('style', 'display:block')
    }
    const closeContact = (e) => {
        e.preventDefault()
        const contact = document.getElementById('contact_from_navBar')
        contact.setAttribute('style', 'display:none')
    }
    const closeMobileContact = (e) => {
        e.preventDefault()
        const contact = document.getElementById('contact_from_navBar-mobile')
        contact.setAttribute('style', 'display:none')
    }
    const openMobileMenu = (e) =>{
        let menu = document.getElementsByClassName('navBar-mobile-container')[0]
        if(menu.style.display === 'none'){
            menu.style.display = 'block'
        }else{
            menu.style.display = 'none'
        }   
    }
    const closeMobileMenu = (e) =>{
        let menu = document.getElementsByClassName('navBar-mobile-container')[0]
        if(menu.style.display === 'block'){
            menu.style.display = 'none'
        }
    }
    if (screenInfo.width >= 1080) {
        return (
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
                        <a href="#contact" class="pure-menu-link" onClick={(e) => { contact(e) }}>Contact</a>
                    </li>
                    {/* <li className="pure-menu-item">
                        <a href="#" class="pure-menu-link">Sign-in/Register</a>
                    </li> */}
                </ul>
                <div id="contact_from_navBar" style={{ display: 'none' }}>
                    <a href='#contact' id="contact-exit" onClick={(e) => { closeContact(e) }}>❌</a>
                    <Contact source={'NavBar'} />
                </div>
            </div>
        )
    }else{
        return(
            // vanilla
            <div className="navBar-mobile">
                <div>
                    <img src={burgerIcon} alt="Menu"  id="burgerIMG" onClick={(e)=>{openMobileMenu(e)}}/>
                </div>
                <div className="navBar-mobile-container" style={{display: 'none'}} onClick={(e)=>{closeMobileMenu(e)}}>
                    <div className="navBar-mobile-links">
                        <ul className="mobile-links-list">                           
                            <li className="mobile-links-item">
                                <a href="#aboutMe" class="mobile-links-item-aTag">About Me</a>
                            </li>
                            <li className="mobile-links-item">
                                <a href="#projects" class="mobile-links-item-aTag">Projects</a>
                            </li>
                            <li className="mobile-links-item">
                                <a href="#resume" class="mobile-links-item-aTag">Resume</a>
                            </li>
                            <li className="mobile-links-item">
                                <a href="#contact" class="mobile-links-item-aTag" onClick={(e) => { openMobileContact(e) }}>Contact</a>
                            </li>
                            {/* <li className="pure-menu-item">
                                <a href="#" class="pure-menu-link">Sign-in/Register</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div id="contact_from_navBar-mobile" style={{ display: 'none' }}>
                    <a href='#contact' id="contact-exit" onClick={(e) => { closeMobileContact(e) }}>❌</a>
                    <Contact source={'NavBar'} />
                </div>
            </div>
        )
    }
}