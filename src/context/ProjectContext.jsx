import React, { useState, useContext, createContext } from 'react'
import { projectsData } from './projects-data'

const ProjectContext = createContext({})

export function useProject() {
    return useContext(ProjectContext)
}

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectsData)

    const value = {
        projects: projects,
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectProvider
