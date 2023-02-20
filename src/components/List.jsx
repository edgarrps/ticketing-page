import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const List = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('Tickets')) || [];
    setTickets(storedTickets);
  }, []);

  return (
    <div>
      <h2 className='text-center px-6 py-3 text-left text-2
      xl text-gray-500 uppercase'>Lista de Tickets</h2>
      <table className='w-full divide-y divide-gray-200'>

        <thead>
          <tr>
            <th className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>ID</th>
            <th className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>Título</th>
            <th className='px-6 py-3 text-left  text-xs font-4xl text-grady-500 uppercase tracking-wider'>Usuário</th>
            <th className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>Categoria</th>
            <th className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>Urgência</th>
          </tr>
        </thead>

        <tbody>
          <hr />
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>
                <Link className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider' to={`/tickets/${ticket.id}`}>{ticket.id}</Link>
              </td>
              <td className='px-6 py-3 max-w-readable text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>{ticket.title}</td>
              <td className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>{ticket.user}</td>
              <td className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>{ticket.category}</td>
              <td className='px-6 py-3 text-left text-xs font-4xl text-grady-500 uppercase tracking-wider'>{ticket.urgency}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};
