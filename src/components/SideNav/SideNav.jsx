import React from 'react'
import './SideNav.scss'

export default function SideNav() {
    return (
        <div className='sidenav'>
            <p>ALL BOARDS (2)</p>

            <ul>
                <li className=''>Kanban board</li>
                <li className=''>Kanban board</li>
                <li className='active'>Kanban board</li>
                <li className=''>Kanban board</li>
            </ul>
        </div>
    )
}
