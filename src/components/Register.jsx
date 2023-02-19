import JoinUs from '../img/JoinUs.svg'
import { useState } from 'react'
import { fakeToken } from './FakeToken'

export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const saveUser = (user) => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
      }

      const handleRegister = (e) => {
        e.preventDefault()
        
        // Validação dos campos
        const errors = {}
        if (!username) {
          alert(errors.username = 'Nome de usuário não informado para cadastro')
        }
        if (!email) {
          errors.email = 'Email não informado'
        } else {
          const emailPattern = /^\S+@\S+\.\S+$/
          if (!emailPattern.test(email)) {
            alert(errors.email = 'Email inválido')
          }
        }
        if (!password) {
          alert(errors.password = 'Senha não informada')
        } else if (password.length < 6) {
          alert(errors.password = 'Senha de no mínimo 6 caracteres')
        }
      
        if (Object.keys(errors).length > 0) {
          console.log('Existem pendências do registro', errors)
          return
        }

        // Salvar os dados no localStorage
        const user = { username, email, password }
        saveUser(user)
        alert('Cadastro realizado com sucesso!')
        localStorage.setItem('token', fakeToken)
        window.location.reload()
      }

    return (
        <div>

            <div className='justify-content'>
                <img className='min-w-[60px] w-[200px] mx-auto pt-10 pb-10' src={JoinUs} />
            </div>
            <form onSubmit={handleRegister} className='bg-white space-y-2 max-w-[300px] w-full mx-auto rounded-2xl bg-gray-400 p-8 px-8'>

                <div className='text-center pb-1'>
                    <label className='text-3xl text-gray-600 font-bold'>Usuário novo?</label><label className='text-2xl text-gray-600 font-bold'>Registre-se</label>
                </div>
                <div className='text-center'>
                    <div className='pb-2'><label htmlFor='username'>Nome do usuário</label></div>
                    <input value={username} onChange={e => setUsername(e.target.value)} className='text-center placeholder:text-center flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='username' type='text' placeholder='username'></input>
                </div>
                <div className='text-center'>
                    <div className='pt-2 pb-2'><label htmlFor='email'>E-mail</label></div>
                    <input value={email} onChange={e => setEmail(e.target.value)} className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='email' type='email' placeholder='user@user.com'></input>
                </div>
                <div className='text-center'>
                    <div className='pt-2 pb-2'><label htmlFor='password'>Senha</label></div>
                    <input value={password} onChange={e => setPassword(e.target.value)} className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='password' type='password' placeholder='********'></input>
                </div>
                <div className='pt-4 text-center'>
                <button type='submit' disabled={!username || !email || password.length < 6} className='text-white bg-yellow-600 disabled:bg-gray-400 hover:bg-yellow-500 shadow-xl focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Registrar</button>
                </div>
            </form>
        </div>
    )
}
