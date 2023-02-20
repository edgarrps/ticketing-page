import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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
    <div>
      <form onSubmit={handleSubmit} className='p-10 bg-yellow-200'>
        <div className='p-4 max-w-fit mx-auto text-center rounded-3xl shadow-xl flex items-center space-x-4'>
          <label className='font-bold text-4xl text-gray-500'>Novo Ticket</label>
        </div>
        <br />
        <div className='pt-1 pl-6 pr-6 pb-5 max-w-fit mx-auto pt-10 pb-10 bg-yellow-300 text-center rounded-3xl shadow-xl flex items-center space-x-4'>
          <div className=''>
            <div className='pt-5'>
              <label className='font-bold p-4 text-2xl text-gray-500' htmlFor='title'>Assunto</label>
              <div className='pt-2'>
              <input className='flex text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-2' placeholder='Mínimo 5 caracteres' id='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)} maxLength={50} />
            </div>
            </div>

            <div className='pt-5'>
              <label className='font-bold p-4 text-2xl text-gray-500' htmlFor='category'>Categoria</label>
              <div className='pt-2'>
                <select id={category} onChange={e => setCategory(e.target.value)} className='text-center flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-2'>
                  <option></option>
                  <option>Dúvida/Informação</option>
                  <option>Evolução</option>
                  <option>Solicitação</option>
                  <option>Tutorial</option>
                </select>
              </div>
            </div>

            <div className='pt-5'>
              <label className='font-bold text-2xl text-gray-500'>Urgência</label>
              <div className='pt-2'>
                <select value={urgency} onChange={(e) => setUrgency(e.target.value)} className='flex text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-2' id='level'>
                  <option></option>
                  <option>Leve</option>
                  <option>Média</option>
                  <option>Alta</option>
                  <option>Urgente</option>
                </select>
              </div>

              <div className='pt-5 pb-2'>
                <label className='font-bold p-4 text-2xl text-gray-500' htmlFor='description'>Descrição</label>
              </div>
            </div>

            <div className='w-full mb-4 border border-yellow-300 rounded-lg bg-gray-50'>
              <div className='flex items-center justify-between px-3 py-2 border-b'>
                <div className='flex flex-wrap items-center divide-gray-200 sm:divide-x'>
                  <div className='flex items-center space-x-1 sm:pr-4'>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Anexar arquivo</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Imcorporar mapa</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Subir imagem</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Formatar texto</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Adicionar emoji</span>
                    </button>
                  </div>
                  <div className='flex flex-wrap items-center space-x-1 sm:pl-4'>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Adicionar lista</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Configurações</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Timeline</span>
                    </button>
                    <button type='button' className='p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100'>
                      <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z' clipRule='evenodd'></path></svg>
                      <span className='sr-only'>Baixar</span>
                    </button>
                  </div>
                </div>
                <button type='button' data-tooltip-target='tooltip-fullscreen' className='p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100'>
                  <svg aria-hidden='true' className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z' clipRule='evenodd'></path></svg>
                  <span className='sr-only'>Tela cheia</span>
                </button>
                <div id='tooltip-fullscreen' role='tooltip' className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip'>
                  Mostrar tela cheia
                  <div className='tooltip-arrow' data-popper-arrow></div>
                </div>
              </div>
              <div className='px-4 py-2 bg-white rounded-b-lg'>
                <label htmlFor='editor' className='sr-only'>Descrição</label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} maxLength={2000} id='editor' rows='8' className='block w-full px-0 text-sm text-gray-600 border-0' placeholder='Descreva seu texto' required></textarea>
              </div>
            </div>

            <div className='p-2 grid gap-6 md:grid-cols-2 w-[300px] mx-auto'>
              <button disabled={title.length < 5 || !category || !urgency || description.length < 10} className='text-white bg-yellow-600 disabled:bg-gray-400 hover:bg-yellow-500 focus:ring-4 shadow-xl focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Enviar</button>
              <Link className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 shadow-xl focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' to='../tickets'><button>Voltar</button></Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
