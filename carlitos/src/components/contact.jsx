import React from "react";
import { contactListFixed, contactListFull } from "./img/contactList";

export default function Contact({source}){
  let vidSrc;
  
  if(source === 'demo'){
    vidSrc = source
    return (
      <div className="contact_section" id="contact">
        <div className="contact_video_section">
            <div id="contact_video">
                <h1>video src: {vidSrc}</h1>
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
  }else{
    vidSrc = source
    return (
      <div className="contact_section" id="contact" >
        <div className="contact_video_section">
            <div id="contact_video">
                <h1>video src: {vidSrc}</h1>
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