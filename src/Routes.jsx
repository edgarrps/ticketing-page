import { Routes, Route } from 'react-router-dom'
import GetStarted from './pages/GetStarted'
import { Tickets } from './pages/Tickets'
import { NewTicket } from './components/NewTicket'
import { Details } from './pages/Details'

export default () => {
    return (
        <><Routes>
            <Route exact path='/' element={<GetStarted />} />
            <Route exact path='/new-ticket' element={<NewTicket />} />
            <Route exact path='/tickets' element={<Tickets />} />
            <Route exact path='/ticket-details' element={<Details />} />
        </Routes>
        </>
    )
} 