import React, { useState } from 'react'
import { useProject } from '../../context/ProjectContext'
import './Link.scss'
import { Layout, Plus } from 'react-feather'

export default function Links() {
    const { projects, currentProject, addNewProject, changeBoard } =
        useProject()
    const [isOpen, setIsOpen] = useState(false)
    const [text, setText] = useState('')

    return (
        <div className='links'>
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
                        <Layout />
                        {project.title}
                    </li>
                ))}
                <li
                    className='create-board'
                    onClick={() => {
                        setIsOpen((currentValue) => !currentValue)
                    }}
                >
                    <Plus />
                    Create new board
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
