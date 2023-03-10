import { Link } from 'react-router-dom'
import { List } from '../components/List'

export const Tickets = () => {

  const logout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <div className='grid sm:grid-cols-1 h-screen bg-yellow-100'>
      <form>
        <div className='grid flex flex-col'>
          <div className='p-2 grid gap-6 md:grid-cols-2 w-[300px] mx-auto'>
            <Link to='../new-ticket'><button className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 shadow-xl focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Novo Ticket</button></Link>
            <button onClick={logout} className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 shadow-xl focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Logout</button>
          </div>
        </div>


        <div className='grid mx-auto'>
          <div className=''>
            <List />
          </div>
        </div>
      </form>

    </div>
  )
}
