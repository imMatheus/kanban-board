import React from 'react'
import './SideNav.scss'
import { useProject } from '../../context/ProjectContext'
import Links from '../Links/Links'

export default function SideNav() {
    const { projects } = useProject()

    return (
        <div className='sidenav'>
            <p>ALL BOARDS ({projects.length})</p>
            <Links />
        </div>
    )
}
