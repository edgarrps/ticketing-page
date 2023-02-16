import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
export const List = () => {
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('Tickets')) || []
    setTickets(storedTickets)
  }, [])

  return (
    <div>
      <h2>Lista de Tickets</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Urgência</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>
                <Link to={`/tickets/${ticket.id}`}>{ticket.id}</Link>
              </td>
              <td>{ticket.title}</td>
              <td>{ticket.category}</td>
              <td>{ticket.urgency}</td>
              <td>{ticket.user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};