import React from 'react'
import { useState } from 'react'

// Aqui irá ter uma tabela onde informa todos os tickets gerados

export const List = () => {

  const [list, setList] = useState([
    { id: null, titulo: '', categoria: '', nvl: '', desc: '' }
  ])


  return (
    <div>Lista de Tickets</div>
  )
}
