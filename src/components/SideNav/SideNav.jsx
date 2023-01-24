import React from 'react'
import './SideNav.scss'
import { useProject } from '../../context/ProjectContext'

export default function SideNav() {
    const { projects, currentProject, changeBoard } = useProject()
    console.log(projects)

    return (
        <div className='sidenav'>
            <p>ALL BOARDS (2)</p>

            <ul>
                {projects.map((project, index) => (
                    <li
                        onClick={() => {
                            changeBoard(index)
                        }}
                        key={project.id}
                        className={
                            currentProject.id === project.id
                                ? 'active'
                                : undefined
                        }
                    >
                        {project.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
