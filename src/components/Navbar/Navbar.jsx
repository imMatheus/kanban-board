import React from 'react'
import { useProject } from '../../context/ProjectContext'
import './Navbar.scss'

export default function Navbar() {
    const { currentProject } = useProject()

    return (
        <nav className='navbar'>
            <div className='navbar-logo-container'>
                <h1>Kanban</h1>
            </div>
            <div className='navbar-heading'>
                <h2>{currentProject.title}</h2>
            </div>
            <button>Add new ticket</button>
        </nav>
    )
}
