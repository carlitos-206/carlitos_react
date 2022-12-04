import React from "react";
import ContactForm from "./contactForm";
import { contactListFixed, contactListFull } from "./img/contactList";
// This Function holds the two contact section options
// option 1: Projects contact button ie === 'demo';
            // This conatains the fixed contact list where some items are removed
// option 2: Menu nav bar contact section
            // This contains the full contact list 
export default function Contact({source}){
  // this gets the screen dimension
  let screenInfo = {width: window.innerWidth, height: window.innerHeight}
  // this condtion hits if the screen width is greater than 1025px which is larger than a tablet
  if(screenInfo.width>1025){
    // This condition hits if the source of the call is from the project section s
    if(source === 'demo'){
      return (
        <div className="contact_section" id="contact">
          <div className="contact_video_section">
            <h1 id="contact_me_header">CONTACT ME FOR A DEMO</h1>    
            <p id="contact_me_body"> Using Ngrok, I can live Demo any project, watch below how.</p>          
            <div id="contact_video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/3oPyNdDMbCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="contactForm_demo">
                <ContactForm formSource={'demo'} deviceType={'monitor'} />
              </div>
              <div className="contact_items">
                    {
                      contactListFixed.map((item, idx)=>{
                        return(
                          <div className="contact_items_rendered" key={idx}>
                            <a href={item.url} id={`contact_item_${idx}`} target='_blank' rel="noopener noreferrer" key={idx}>
                              <img src={item.icon} alt={item.title} className="contact_item_img" />
                            </a>
                          </div>
                        )
                      })
                    }
              </div>
          </div>
        </div>
      )
    }
    // for every other condition the full contact list is prefered
    else{
      return (
        <div className="contact_section" id="contact" >
          <div className="contact_video_section">
            <h1 id="contact_me_navBar">Contact Me</h1>
            <div className="contactForm_navBar">
                <ContactForm formSource={'navBar'} deviceType={'monitor'} />
              </div>
              <div className="contact_items">
                    {
                      contactListFull.map((item, idx)=>{
                        return(
                          <div className="contact_items_rendered" key={idx}>
                            <a href={item.url} id={`contact_item_${idx}`} target='_blank' rel="noopener noreferrer" key={idx}>
                              <img src={item.icon} alt={item.title} className="contact_item_img" />
                            </a>
                          </div>
                        )
                      })
                    }
              </div>
          </div>
        </div>
      )
    }
  }
  
  // else it will create the bootstrap card for mobile devices
  else{
    if(source === 'demo'){
      return (
        <div className="contact_section" id="contact" > 
          <div className="boostStrap-contactCard-header">
            <h1 id="contactCardHeader-title">CONTACT ME FOR A DEMO</h1>
            <p id="contactCardHeader-body"> Using Ngrok, I can live Demo any project, watch below how.</p>
            <iframe id="ngrok-video" src="https://www.youtube.com/embed/3oPyNdDMbCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <div className="contactForm_navBar">
                <ContactForm formSource={'mobile_demo'} deviceType={'mobile'} />
            </div>
            <div id='link-img-listGroups'>
              {contactListFixed.map((item, idx)=>{
                return(
                  <a href={item.url}  target='_blank' rel="noopener noreferrer" key={idx}>
                        <img src={item.icon} alt={item.title} className="contact_item_img" />
                        {/* <p className="contact_item_title">{item.title}</p> */}
                    </a>
                )
              })}
            </div>
        </div>
      );
    }
    else{
      return (
        <div className="contact_section_menu" id="contact" > 
        <div className="boostStrap-contactCard-header-menu">
          <h1 id="contactCardHeader-title-menu">CONTACT ME</h1>
        </div>
          <div className="contactForm_mobile_navBar">
                <ContactForm formSource={'mobile_navBar'} deviceType={'mobile'} />
          </div>
          <div id='link-img-listGroups'>
            {contactListFull.map((item, idx)=>{
              return(
                <a href={item.url} target='_blank' rel="noopener noreferrer" key={idx}>
                      <img src={item.icon} alt={item.title}  id={`contact_item_${idx}`} className="contact_item_img" />
                      {/* <p className="contact_item_title">{item.title}</p> */}
                  </a>
              )
            })}
          </div>
      </div>
      );
    }
  }
}