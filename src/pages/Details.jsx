import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const Details = () => {
  const { id } = useParams()
  const [ticket, setTicket] = useState(null)

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('Tickets')) || []
    const foundTicket = storedTickets.find((ticket) => ticket.id === parseInt(id))
    setTicket(foundTicket)
  }, [id])

    if (!ticket) {
      return <p>Ticket não encontrado.</p>
    }

  return (
    <div>
      <h2>Detalhes do Ticket {ticket.id}</h2>
      <p><strong>Título:</strong> {ticket.title}</p>
      <p><strong>Categoria:</strong> {ticket.category}</p>
      <p><strong>Urgência:</strong> {ticket.urgency}</p>
      <p><strong>Descrição:</strong> {ticket.description}</p>
      <p><strong>Usuário:</strong> {ticket.user}</p>
    </div>
  )
}
