import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const NewTicket = () => {

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [urgency, setUrgency] = useState('')
  const [lastTicketId, setLastTicketId] = useState(1) // inicializa com 1

  useEffect(() => {
    const lastId = Number(localStorage.getItem('lastTicketId'))
    if (!isNaN(lastId)) {
      setLastTicketId(lastId)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('users'))
    const username = users[0].username
    
    function gerarIdTicket(username) {
      let lastId = localStorage.getItem(`lastTicketId-${username}`)
      let newId
      if (lastId) {
        newId = parseInt(lastId, 10) + 1
      } else {
        newId = lastTicketId + 1 // utiliza o lastTicketId como ponto de partida
      }
      localStorage.setItem(`lastTicketId-${username}`, newId.toString())
      return newId.toString()
    }

    const newTicketId = gerarIdTicket(username) // gera novo ID
    const ticket = {
      id: newTicketId, // usa o novo ID gerado
      title: title,
      category: category,
      urgency: urgency,
      description: description,
      user: username
    }
    

    const storedTickets = JSON.parse(localStorage.getItem('Tickets')) || []
    storedTickets.push(ticket)
    localStorage.setItem('Tickets', JSON.stringify(storedTickets))
    setTitle('')
    setCategory('')
    setUrgency('')
    setDescription('')

    alert(`Ticket ${newTicketId} criado com sucesso`)
  }

  return (
    <form onSubmit={handleSubmit} className='bg-yellow-200 h-screen'>
      <div className='space-y-2 max-w-[700px] w-full mx-auto rounded-2xl bg-yellow-400 p-2 px-2 text-center'>
        <div>
          <label>Novo Ticket</label>
        </div>

        <div className=''>
          <div className=''>
            <label htmlFor='title'>Assunto</label>
            <input className='flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} maxLength={50} />
          </div>

          <div>
            <label htmlFor='category'>Categoria</label>
            <select id={category} onChange={e => setCategory(e.target.value)} className='flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5'>
              <option></option>
              <option>Dúvida/Informação</option>
              <option>Evolução</option>
              <option>Solicitação</option>
              <option>Tutorial</option>
            </select>
          </div>

          <div>
            <label >Urgência</label>
            <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className='flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='level'>
              <option></option>
              <option>Leve</option>
              <option>Média</option>
              <option>Alta</option>
              <option>Urgente</option>
            </select>

            <div>
              <label htmlFor='description'>Descrição</label>
              <textarea value={description} className='flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-2xl block w-full p-1.5' id='description' onChange={e => setDescription(e.target.value)} maxLength={2000} />
            </div>
          </div>

          <div className='pt-4 text-center'>
            <button className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Enviar</button>
            <Link className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' to='../tickets'><button>Voltar</button></Link>
          </div>
        </div>
      </div>
    </form>
  )
}
