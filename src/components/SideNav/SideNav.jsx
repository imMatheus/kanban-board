import React, { useState } from 'react'
import './SideNav.scss'
import { useProject } from '../../context/ProjectContext'

export default function SideNav() {
    const { projects, currentProject, addNewProject, changeBoard } =
        useProject()
    const [isOpen, setIsOpen] = useState(false)

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
                <li
                    className='create-board'
                    onClick={() => {
                        setIsOpen((currentValue) => !currentValue)
                    }}
                >
                    Create new board +
                </li>
            </ul>
            {isOpen && (
                <div className='create-project'>
                    <input type='text' />
                    <button
                        onClick={() => {
                            addNewProject('hej')
                        }}
                    >
                        Create Project
                    </button>
                </div>
            )}
        </div>
    )
}
