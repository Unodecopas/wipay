import React from 'react'
import { useUsers } from '../context/UsersContext'

export const HomePage = () => {
  const { users } = useUsers()

  return (
    <div className='container'>
      {users &&
        <div className='count'>
          <h1>Total users</h1>
          <h2>{users.length}</h2>
        </div>
      }
    </div>
  )
}
