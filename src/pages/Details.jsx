import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Tickets } from './Tickets'

export const Details = () => {
  const { id } = useParams()
  const [ticket, setTicket] = useState(null)
  
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('Tickets')) || []
    const selectedTicket = storedTickets.find((ticket) => ticket.id === parseInt(id))
    setTicket(selectedTicket)
    console.log({Tickets})
  }, [id])

  
  return (
    <div>
      {ticket ? (
        <>
          <h1>{ticket.title}</h1>
          <p>{ticket.description}</p>
          <form>
          </form>
          <Link to='/tickets'><button>Voltar</button></Link>
        </>
      ) : (
        <p>Ticket não encontrado</p>
      )}
    </div>
  )
}