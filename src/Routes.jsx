import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { NewTicket } from './components/NewTicket'
import { Tickets } from './pages/Tickets'
import GetStarted from './pages/GetStarted' 

function App() {
    
    // Recupera o token salvo em localStorage
    const token = localStorage.getItem('token')

    // Verifica se o token é válido
    const isAuthenticated = token

    // Componente de validação de login
    function ProtectedRoute({ element, ...rest }) {
        const navigate = useNavigate()
        const token = localStorage.getItem('token')

        if (!isAuthenticated) {
            return <Navigate to="/" replace />
        }

        return <Route {...rest} element={element} />
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<GetStarted />} />
                {isAuthenticated ? (
                    <>
                        <Route path="/new-ticket" element={<NewTicket />} />
                        <Route path="/tickets" element={<Tickets token={token} />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/" replace />} />
                )}
            </Routes>
        </div>
    )
}

export default App