import React from 'react'
import { Link } from 'react-router-dom'
import { List } from '../components/List'

export const Tickets = () => {
  return (
    <div>
        <List />
        <Link to='../new-ticket'><button>Novo Ticket</button></Link>
    </div>
  )
}
