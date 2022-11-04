import React from 'react'
import { Link } from 'react-router-dom'
import { useUsers } from '../context/UsersContext'

export const HomePage = () => {
  const { users } = useUsers()

  return (
    <div className='container'>
      {users &&
        <div className='count'>
          <Link to={'/users'}>
          <h1>Total users</h1>
          <h2>{users.length}</h2>
          </Link>
        </div>
      }
    </div>
  )
}
