import { Login } from "../components/Login"
import { Register } from "../components/Register"

export default function GetStarted() {
  return (
    <div>
      <h1>Vamos começar!</h1>
      <h2>Crie seus tickets do nosso sistema</h2>
      <Login />
      <Register />
    </div>
  )
}
