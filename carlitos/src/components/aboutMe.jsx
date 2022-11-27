import React from "react";

// This function holds the About me portion of the page
export default function AboutMe(){
  return(
    <div id="aboutMe">
      <div className="aboutMe_container">
        <div className="aboutMe_header">
          <h1 id="aboutMe_title">Hello World.</h1>
        </div>
        <div className="aboutMe_body">
          <div className="aboutMe_text">
              <p id="about_text_section_1">
                Hi, my name is Carlos R. Cáceres Martínez. 
                I am a cook and a Full Stack Web Developer; 
                I have knowledge in 2 languages for backend API development; 
                they are Python and JavaScript. 
                In Python I use Django as the main framework and for JavaScript 
                I use Express with Node JS. As for database management I know SQL and No-SQL. 
                For Django I can use both SQL and No-SQL. 
                For SQL I use the inbuilt Object Relational Map (ORM) using Sqlite3; and for No-SQL 
                I use Mongo DB and Google Firebase.  
                At the moment of writing this when it comes to Express, 
                I have only used No-SQL database management. Those are Mongo DB and Google Firebase. 
                I soon intend to learn Postgre SQL to better adapt apps based on both client and 
                development needs. I also am not dependent on a framework to render content onto the browser; 
                for Django I use the inbuilt Jinja2 templates and for Express 
                I can use the EJS view engine; while I prefer an actual framework for front end development, 
                I am not dependent on them.
              </p>
              <p id="about_text_section_2">
                For front-end I use React JS as my main framework for development. 
                I use the Fetch API and the Axios package to interact with API’s. 
                I also use various front-end libraries and frameworks to simplify the design process they are, 
                React Boot-Strap, Tail-Wind CSS, Boot-Strap, Pure CSS and Animate CSS. 
                I also feel comfortable with JQuery for any legacy maintenance. 
                I also keep my design organized by creating wireframes using Balsamiq. 
                But I am also not dependent on a backend API for database management. 
                I know how to simply combine Google Firebase and React JS to perform all the CRUD methods 
                in a secure manner using the dotenv package. 
              </p>
              <p id="about_text_section_3">
                As for the OS’s the I feel confident using are Windows and Linux: Ubuntu:18.04LTS +. 
                In Windows I feel confident (googling the commands) in using 
                Command Prompt, Windows PowerShell, and Git Bash. 
                When I land a job, I intend to buy an Apple Computer for the simple reason to learn 
                the OS and Swift. When it comes to deployment, 
                I use AWS EC2 Virtual Machines, Heroku, Netlify and Ngrok. 
                I also intend to learn Google Cloud for deployment to continue to 
                diversify and not be reliant on same set of methods.
                </p>
              <p id="about_text_section_4">
                I also decided to prepare this short video on who I am, and how I arrived at this 
                position but ultimately showcase my ability to be on camera and properly edit that content.
              </p>
            </div>
            <div className="aboutMe_video">
              <iframe className="hello_world_video" src="https://www.youtube.com/embed/Z11m9nCDSxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}