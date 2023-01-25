import React, { useState } from 'react'
import './CreateTicket.scss'
import { useProject } from '../../context/ProjectContext'
import { v4 as uuidv4 } from 'uuid'

export default function CreateTicket({ setShowAddTicket }) {
    const { addTicket } = useProject()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState([''])

    return (
        <div className='modal'>
            <div className='modal-card'>
                <h3 className='heading-l'>Add New Task</h3>
                <button
                    onClick={() => {
                        setShowAddTicket(false)
                    }}
                >
                    Close model
                </button>
                <div className='modal-input-group'>
                    <label htmlFor='title' className='body-m'>
                        Title
                    </label>
                    <input
                        type='text'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='e.g Take StarWars break'
                    />
                </div>

                <div className='modal-input-group'>
                    <label htmlFor='description' className='body-m'>
                        Description
                    </label>
                    <textarea
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id='description'
                        placeholder='e.g get a good opinion for ones'
                    />
                </div>

                <div className='modal-input-group'>
                    <label htmlFor='subtasks' className='body-m'>
                        Subtasks
                    </label>
                    {tasks.map((task, index) => (
                        <input
                            type='text'
                            id='subtasks'
                            placeholder='e.g get a good opinion for ones'
                            value={task}
                            onChange={(e) => {
                                tasks[index] = e.target.value
                                setTasks([...tasks])
                            }}
                        />
                    ))}
                    <button
                        onClick={() => {
                            setTasks(tasks.concat(''))
                        }}
                    >
                        + Add new task
                    </button>
                </div>
                <button
                    onClick={() => {
                        addTicket({
                            id: uuidv4(),
                            title,
                            description,
                            tasks,
                        })
                    }}
                >
                    Create ticket
                </button>
            </div>
        </div>
    )
}
