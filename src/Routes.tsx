import { Routes, Route } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
import { Tickets } from './pages/Tickets'
import { NewTicket } from './components/NewTicket'
import { Details } from './pages/Details'

export default () => {
    return (
        <><Routes>
            <Route path='/' element={<GetStarted />} />
            <Route path='/new-ticket' element={<NewTicket />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/ticket-details' element={<Details />} />
        </Routes>
        </>
    )
} 