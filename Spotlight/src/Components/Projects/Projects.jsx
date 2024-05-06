import React from 'react'

const Projects = ({list}) => {
  return (
    <>
    {console.log(list)}
    {
        list.map((project,index)=>(
            <div key={index}>
                {project.name}
            </div>
        ))
    }
    </>
  )
}

export default Projects