import Board from './components/Board/Board'
import SideNav from './components/SideNav/SideNav'
import Navbar from './components/Navbar/Navbar'
import CreateTicket from './components/CreateTicket/CreateTicket'
import { useState } from 'react'
import ProjectsDropDown from './components/ProjectsDropDown/ProjectsDropDown'

function App() {
    const [showAddTicket, setShowAddTicket] = useState(false)
    const [showDropDown, setShowDropDown] = useState(false)

    return (
        <div className='App'>
            <Navbar
                setShowAddTicket={setShowAddTicket}
                setShowDropDown={setShowDropDown}
            />
            <main>
                <SideNav />
                <Board />
            </main>
            {showAddTicket && (
                <CreateTicket setShowAddTicket={setShowAddTicket} />
            )}
            {showDropDown && (
                <ProjectsDropDown setShowDropDown={setShowDropDown} />
            )}
        </div>
    )
}

export default App
