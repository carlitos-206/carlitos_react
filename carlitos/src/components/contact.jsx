import React from "react";
import { contactListFixed, contactListFull } from "./img/contactList";


// This Function holds the two contact section options
// option 1: Projects contact button ie === 'demo';
            // This conatains the fixed contact list where some items are removed
// option 2: Menu nav bar contact section
            // This contains the full contact list 
export default function Contact({source}){
  // This condition hits if the source of the call is from the project section
  if(source === 'demo'){
    return (
      <div className="contact_section" id="contact">
        <div className="contact_video_section">
            <div id="contact_video">
                <h1>video src: {source}</h1>
            </div>
            <div className="contact_items">
                  {
                    contactListFixed.map((item, idx)=>{
                      return(
                        <div className="contact_items_rendered" key={idx}>
                          <a href={item.url} id={`contact_item_${idx}`} target='_blank' rel="noopener noreferrer" key={idx}>
                            <img src={item.icon} alt={item.title} className="contact_item_img" />
                            <p>{item.title}</p>
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
            <div id="contact_video">
                <h1>video src: {source}</h1>
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