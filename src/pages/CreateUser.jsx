import React, { useState } from 'react'
import Form from '../components/Form'
import { useUsers } from '../context/UsersContext'

const CreateUser = () => {
  const { users, dispatch } = useUsers()
  const [message, setMessage] = useState({ type: '', message: '' })

  const createUser = (email, password) => {
    if (users.find(user => user.email === email)) {
      setMessage({ type: 'error', message: 'Email already register' })
      setTimeout(() => {
        setMessage({ type: '', message: '' })
      }, 3000)
    } else {
      dispatch({ type: 'added', email, password })
      setMessage({ type: 'success', message: 'User created succesfully' })
      setTimeout(() => {
        setMessage({ type: '', message: '' })
      }, 3000)
    }
  }

  return (
    <div className='container'>
      <h2>Create User</h2>
      <Form onSubmit={createUser}/>
      {message && <p className={message.type}>{message.message}</p>}
    </div>
  )
}

export default CreateUser
