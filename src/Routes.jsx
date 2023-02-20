import { Routes, Route, Navigate } from 'react-router-dom'
import { NewTicket } from './components/NewTicket'
import { Tickets } from './pages/Tickets'
import GetStarted from './pages/GetStarted'

function App() {
    const token = localStorage.getItem('token')
    const isAuthenticated = token

    return (
        <div className="App">
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/" element={<Tickets />} />
                        <Route path="*" element={<Navigate to="/tickets" replace />} />
                        <Route path="/new-ticket" element={<NewTicket />} />
                        <Route path="/tickets" element={<Tickets token={token} />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<GetStarted />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </>
                )}
            </Routes>
        </div>
    )
}

export default App