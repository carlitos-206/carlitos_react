import React from "react";
import gitHub from "./img/tech/github.png"
import Contact from "./contact";
import { newToOld } from "./globalFunctions/projectsByDate";
const projects =  require("./data/projects.json")

export default function Projects(){
  // the actual function lives in a external function to keep it this clean
  const newToOldProjects = newToOld(projects)
  // this functions hides the contact div
  const close = (e) =>{
    e.preventDefault()
    let contactForm = document.getElementsByClassName('demo_contact')[0]
    contactForm.setAttribute('style', 'display:none')
  }
  // this functions shows the contact div
  const contact = (e) =>{
    e.preventDefault()
    let contactForm = document.getElementsByClassName('demo_contact')[0]
    contactForm.setAttribute('style', 'display:block')
    const contact = document.getElementById('contact_from_navBar')
    contact.setAttribute('style', 'display:none')
  }

  // active projects might not have a last updted date therfore its need to dynamically add text
  const isActiveProject = (projectDate) =>{
    if(projectDate === null || projectDate === '' || projectDate === '...'){
      return `--Active Progress`
    }else{
      return projectDate
    }
  }
  return(
    <div id="projects" >
      <div className="projects_container">
        <div className="projects_header">
            <a href="https://github.com/carlitos-206" target="_blank" rel="noopener noreferrer" ><img src={gitHub} alt="Git Hub" id="projects_git_logo" /></a>
        </div>
        <div className="projects_body">
            {newToOldProjects.map((project, idx)=>{
              return(
                <div className="projectLink-body" key={idx} id={`project_${idx+1}`}>
                  <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer" key={idx} >
                    <div className="project_title">
                      <h2>{project.title}</h2>
                    </div>
                    <div className="project_fields">
                        <p> {project.language} | {project.frameWork} | {isActiveProject(project.last_updated)}</p>
                    </div>
                  </a>
                </div>
              )
            })}
        </div>
        <div id="project_demo">
          <p id="project_demo_text">Want to live demo a project? <button id="project-contact" onClick={(e)=>{contact(e)}} >Contact me</button></p>
        </div>
        <div className="demo_contact" style={{display: 'none'}} >
          <a href="#contact" id="contact-exit" onClick={ (e)=>{ close(e) } }>❌</a>
          <Contact source='demo' />
        </div>
      </div>
    </div>
  )
}

// On next update allow the user to see project -> (old to new), (new to old), and favorites using useState()