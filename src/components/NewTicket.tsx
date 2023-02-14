import { Link } from "react-router-dom"

export const NewTicket = () => {
  return (
    <form>
      <label>Novo Ticket</label>
      <div>
        <div>
          <label htmlFor='title'>Assunto</label>
          <input id='title' type='text' maxLength={50}></input>
        </div>
        <div>
          <label htmlFor='category'>Categoria</label>
          <select id='category'>
            <option></option>
            <option>Dúvida/Informação</option>
            <option>Evolução</option>
            <option>Solicitação</option>
            <option>Tutorial</option>
          </select>
        </div>
        <div>
          <label htmlFor='level'>Urgência</label>
          <select id='level'>
            <option></option>
            <option>Leve</option>
            <option>Média</option>
            <option>Alta</option>
            <option>Urgente</option>
          </select>
          <div>
            <label htmlFor='description'>Descrição</label>
            <input id='description' type='textarea' maxLength={2000}></input>
          </div>
        </div>
        <div>
          <button type='submit'>Enviar</button>
          <Link to='../tickets'><button>Voltar</button></Link>
        </div>
      </div>
    </form>
  )
}
