import { Link } from "react-router-dom"
import LoginImg from '../img/Login.svg'

export const Login = () => {
  return (
    <div>
      <div className='justify-content'>
        <img className='max-w-[400px] mx-auto pb-10' src={LoginImg} />
      </div>


      <form className='bg-white space-y-2 max-w-[300px] w-full mx-auto rounded-2xl bg-gray-400 p-8 px-8'>

        <div className='text-center pb-1'>
          <label className='text-3xl text-gray-600 font-bold'>Entrar</label>
        </div>

        <div>
          <div><input className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' type='text' placeholder="usuário"></input></div>
          <div className='pt-4 pb-4'><input className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' type='password' placeholder="senha"></input></div>
        </div>

        <div className='grid place-items-center'>
          <Link to='./tickets'><button className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Login</button></Link>
        </div>

      </form>

    </div>
  )
}
