import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <div>
      <label>Login</label>
      <div>
        <input type='text' placeholder="usuário"></input>
        <input type='password' placeholder="senha"></input>
      </div>
      <div>
        <Link to='./tickets'><button type='submit'>Login</button></Link>
      </div>
    </div>
  )
}
