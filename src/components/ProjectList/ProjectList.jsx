import React from 'react'
import classes from './projectList.module.css'

export  function ProjectList({projects}) {
    console.log(projects)
  return (
    <div className='projectListContainer'>
        {projects.map((project) => (
            <img 
                className={classes.img}
                src={project.img} 
                alt={project.category} 
            />
        ))}
    </div>
  )
}
