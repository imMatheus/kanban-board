import React from 'react'
import './SideNav.scss'
import { useProject } from '../../context/ProjectContext'

export default function SideNav() {
    const { projects } = useProject()
    console.log(projects)

    return (
        <div className='sidenav'>
            <p>ALL BOARDS (2)</p>

            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </div>
    )
}
