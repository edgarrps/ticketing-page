import { Link } from "react-router-dom"
import { Ticket } from "../components/Ticket"

export const Details = () => {
  return (
    <div>
      <h1>Ticket #1111</h1>
      <Ticket />
      <form>
        <div>
          <input type='textarea' placeholder='Réplica'></input>
          <button type='submit'>Enviar</button>
        </div>
      </form>
      <Link to='../tickets'><button>Voltar</button></Link>
    </div>
  )
}
