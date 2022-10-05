import React from "react";
import gitHub from "./img/tech/github.png"
const projects =  require("./data/projects.json")
export default function Projects(){
  return(
    <div id="projects">
      <div className="projects_container">
        <div className="projects_header">
            <a href="https://github.com/carlitos-206" target="_blank" rel="noopener noreferrer" ><img src={gitHub} alt="Git Hub" id="projects_git_logo" /></a>
        </div>
        <div className="project_section_title">
            {/* <h1 id="project_section">Projects</h1> */}
        </div>
        <div className="projects_body">
            {projects.map((project, idx)=>{
              return(
                <div className="projectLink-body" key={idx} id={`project_${idx+1}`}>
                  <a className="projectLink" href={project.link} target="_blank" rel="noopener noreferrer" key={idx} >
                    <div className="project_title">
                      <h2>{project.title}</h2>
                    </div>
                    <div className="project_fields">
                        <p> {project.language} | {project.frameWork} | {project.last_updated} | {project.Status} </p>
                    </div>
                  </a>
                </div>
              )
            })}
        </div>
        <div id="project_demo">
          <p id="project_demo_text">Want to live demo a project? <a href="#contact">Contact me</a></p>
        </div>
      </div>
    </div>
  )
}