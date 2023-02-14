import { Login } from "../components/Login"
import { Register } from "../components/Register"

export default function GetStarted() {
  return (
    <div>
      <div className='grid sm:grid-cols-1 flex '>
        <div className='bg-yellow-400 text-center pt-10'>
          <div><label className='text-5xl text-gray-500 font-bold'>Vamos começar!</label></div>
          <div className='mt-1'><label className='text-gray-600 text-2xl'>Crie seus tickets do nosso sistema</label></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
          
          <div className='bg-yellow-400 flex flex-col align-middle'>
            <div className='inset-x-0 top-0'>
              <Login />
            </div>
          </div>

          <div className='bg-yellow-400 flex flex-col align-middle'>
            <div className=''>
              <Register />
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
