import React, { useState } from 'react'
import './Ticket.scss'

export default function Ticket({ item }) {
    const [showList, setShowList] = useState(false)

    return (
        <div
            className='ticket'
            onClick={() => setShowList((currentValue) => !currentValue)}
        >
            <h3 className='heading-m'>{item.title}</h3>
            <p className='body-m'>{item.description}</p>
            <p className='body-m'>{item.tasks.length} subtasks</p>
            {showList && (
                <ul>
                    {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
