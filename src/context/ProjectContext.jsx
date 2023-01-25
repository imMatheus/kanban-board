import React, { useState, useContext, createContext } from 'react'
import { projectsData } from './projects-data'

const ProjectContext = createContext({})

export function useProject() {
    return useContext(ProjectContext)
}

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData)
    const [currentIndex, setCurrentIndex] = useState(0)
    const currentProject = projects[currentIndex]

    function changeBoard(index) {
        setCurrentIndex(index)
    }

    console.log(projects)
    console.log(currentProject)

    function addNewProject(title) {
        if (!title) return

        const newProject = {
            title: title,
            id: projects.length + 1,
            board: [
                {
                    name: 'Todo',
                    tickets: [],
                },
                {
                    name: 'Doing',
                    tickets: [],
                },
                {
                    name: 'Done',
                    tickets: [],
                },
            ],
        }
        setProjects([...projects, newProject])
        setCurrentIndex(projects.length)
    }

    function addTicket(ticket) {
        projects[currentIndex].board[0].tickets.push(ticket)
        setProjects([...projects])
    }

    const value = {
        addTicket,
        changeBoard,
        addNewProject,
        currentProject,
        projects,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider
