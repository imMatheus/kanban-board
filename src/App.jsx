import Board from './components/Board/Board'
import SideNav from './components/SideNav/SideNav'
import Navbar from './components/Navbar/Navbar'

function App() {
    return (
        <div className='App'>
            <Navbar />
            <main>
                <SideNav />
                <Board />
            </main>
        </div>
    )
}

export default App
