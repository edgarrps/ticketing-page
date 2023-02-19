import LoginImg from '../img/Login.svg'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { fakeToken } from './FakeToken'


export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const getUserByUsername = (username) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    return users.find((user) => user.username === username)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    // Validação dos campos
    const errors = {}
    if (!username) errors.username = alert('Preencha o usuário')
    if (!password) errors.password = alert('Preencha a senha')
    if (Object.keys(errors).length > 0) console.log('Erros no formulário', errors)

    // Verificar se o usuário e a senha estão corretos
    const user = getUserByUsername(username)
    if (!user || user.password !== password) { 
      alert('Usuário ou senha incorretos')
      localStorage.removeItem('token')
    }

    console.log('Login realizado!')
    localStorage.setItem('token', fakeToken)
    navigate('/tickets')

  }

  return (
    <div>
      <div className='justify-content'>
        <img className='min-w-[100px] w-[400px] mx-auto pb-10' src={LoginImg} />
      </div>


      <form onSubmit={handleLogin} className='bg-white space-y-2 max-w-[300px] w-full mx-auto rounded-2xl bg-gray-400 p-8 px-8'>

        <div className='text-center pb-1'>
          <label className='text-3xl text-gray-600 font-bold'>Entrar</label>
        </div>

        <div>
          <input onChange={e => setUsername(e.target.value)} className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' value={username} type='text' placeholder='usuário'>
          </input>
        </div>
        <div className='pt-4 pb-4'>
          <input onChange={e => setPassword(e.target.value)} className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' value={password} type='password' placeholder='senha'>
          </input>
        </div>

        <div className='grid md:grid-cols-1 place-items-center'>
          <button disabled={!username || password.length < 6} onClick={handleLogin} className='text-white shadow-xl disabled:bg-gray-400 bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Login</button>
          {/* <button disabled={!fakeToken} className='text-white bg-yellow-600 hover:bg-yellow-500 disabled:bg-gray-400 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Tickets</button> */}
        </div>
      </form>

    </div>
  )
}
