import Board from './components/Board/Board'
import SideNav from './components/SideNav/SideNav'
import Navbar from './components/Navbar/Navbar'
import CreateTicket from './components/CreateTicket/CreateTicket'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <main>
                <SideNav />
                <Board />
            </main>
            <CreateTicket />
        </div>
    )
}

export default App
