import Board from './components/Board/Board'
import SideNav from './components/SideNav/SideNav'
import Navbar from './components/Navbar/Navbar'
import CreateTicket from './components/CreateTicket/CreateTicket'
import { useState } from 'react'

function App() {
    const [showAddTicket, setShowAddTicket] = useState(false)

    return (
        <div className='App'>
            <Navbar setShowAddTicket={setShowAddTicket} />
            <main>
                <SideNav />
                <Board />
            </main>
            {showAddTicket && (
                <CreateTicket setShowAddTicket={setShowAddTicket} />
            )}
        </div>
    )
}

export default App
