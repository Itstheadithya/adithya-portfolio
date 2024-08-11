import React from 'react'

function ProjectsCard({src,link, h3, p}) {
  return (
    <a href={link} target="_blank">
        <img className="hover" src={src} alt="certificate logo"/>
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  );
}

export default ProjectsCard
