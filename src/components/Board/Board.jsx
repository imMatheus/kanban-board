import React from 'react'
import './Board.scss'
import Ticket from '../Ticket/Ticket'
import { useProject } from '../../context/ProjectContext'

export default function Board() {
    const { currentProject } = useProject()

    return (
        <div className='board'>
            {currentProject.board.map((column) => {
                return (
                    <div key={column.name} className='board-column'>
                        <div className='board-title'>
                            <div
                                className={'board-title-icon ' + column.name}
                            ></div>
                            <h4>{column.name}</h4>
                        </div>
                        {column.tickets.map((ticket) => {
                            return <Ticket key={ticket.id} item={ticket} />
                        })}
                    </div>
                )
            })}
        </div>
    )
}
