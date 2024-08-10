import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {

// rendering the span of each technology. 
 const technology= technologies.map((technologies)=>{
    return(
       <span key={technologies}>{technologies}</span> 
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {/* render a <span> for each technology in the technologies array */
      }
      <span>
           {technology}
      </span>
   
      </div>
    </div>
  );
}

export default ProjectItem;
