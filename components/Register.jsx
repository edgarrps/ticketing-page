import JoinUs from '../img/JoinUs.svg'

export const Register = () => {
    return (
        <div>

            <div className='justify-content'>
                <img className='min-w-[60px] w-[200px] mx-auto pt-10 pb-10' src={JoinUs} />
            </div>
            <form className='bg-white space-y-2 max-w-[300px] w-full mx-auto rounded-2xl bg-gray-400 p-8 px-8'>

                <div className='text-center pb-1'>
                    <label className='text-3xl text-gray-600 font-bold'>Usuário novo?</label><label className='text-2xl text-gray-600 font-bold'>Registre-se</label>
                </div>
                <div className='text-center'>
                    <div className='pb-2'><label htmlFor='username'>Nome do usuário</label></div>
                    <input className='text-center placeholder:text-center flex bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='username' type='text' placeholder='username'></input>
                </div>
                <div className='text-center'>
                <div className='pt-2 pb-2'><label htmlFor='email'>E-mail</label></div>
                    <input className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='email' type='email' placeholder='user@user.com'></input>
                </div>
                <div className='text-center'>
                    <div className='pt-2 pb-2'><label htmlFor='passwd'>Senha</label></div>
                    <input className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='passwd' type='password' placeholder='********'></input>
                </div>
                <div className='text-center'>
                <div className='pt-2 pb-2'><label htmlFor='repasswd'>Repetir senha</label></div>
                    <input className='text-center placeholder:text-center bg-gray-100 border-2 outline-yellow-500 border-yellow-300 text-gray-600 text-sm rounded-full block w-full p-1.5' id='repasswd' type='password' placeholder='********'></input>
                </div>
                <div className='pt-4 text-center'>
                    <button className='text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'>Registrar</button>
                </div>
            </form>
        </div>
    )
}

