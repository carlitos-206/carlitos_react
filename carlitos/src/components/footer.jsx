import React from "react";

export default function Footer(){
    return(
      <div className="footer">
        <div className="footer_text">
          <p>
            Thank You |
            <a href="mailto:carloscaceres041@gmail.com" target='_blank' rel="noopener noreferrer" className="footer_tags"> Email</a> |
            <a href="https://www.linkedin.com/in/carlitos206/" target='_blank' rel="noopener noreferrer" className="footer_tags"> Linked In</a> | 
            <a href="https://github.com/carlitos-206" target='_blank' rel="noopener noreferrer" className="footer_tags"> Git Hub</a> |
            <a href="https://www.instagram.com/carlitos.206/" target='_blank' rel="noopener noreferrer" className="footer_tags"> Instagram</a> | 
            <a href="https://www.youtube.com/channel/UCfJtIgTcGEX_D0TLjFi-COQ" target='_blank' rel="noopener noreferrer" className="footer_tags"> Youtube</a>
          </p>
        </div>
      </div>
    )
}