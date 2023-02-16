import { Link } from 'react-router-dom'
import { List } from '../components/List'
import {useState} from 'react'

export const Tickets = () => {

  const [tickets, setTickets] = useState([])

  const addTicket = (ticket) => {
    const newTickets = [ticket, ...tickets]
    setTickets(newTickets)

  }
  return (
    <div className='grid sm:grid-cols-1 h-screen bg-yellow-100'>

      <div className='grid flex flex-col'>
        <div className='pt-10 mx-auto'>
          <Link to='../new-ticket'><button className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Novo Ticket</button></Link>
        </div>
      </div>


      <div className='grid mx-auto'>
        <div className=''>
          <List />
        </div>
      </div>

    </div>
  )
}
