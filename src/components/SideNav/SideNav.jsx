import React, { useState } from 'react'
import './SideNav.scss'
import { useProject } from '../../context/ProjectContext'

export default function SideNav() {
    const { projects, currentProject, addNewProject, changeBoard } =
        useProject()
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState('')

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
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            addNewProject(text)
                            setIsOpen(false)
                            setText('')
                        }}
                    >
                        Create Project
                    </button>
                </div>
            )}
        </div>
    )
}
