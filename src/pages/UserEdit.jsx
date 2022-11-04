import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/Form'
import { useUsers } from '../context/UsersContext'

const UserEdit = () => {
  const { id } = useParams()
  const { users, dispatch } = useUsers()
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(users.find(user => user.id === Number(id)))
  }, [id, users])

  const updateUser = (email, password) => {
    dispatch({ type: 'changed', user: { ...user, email, password } })
  }

  return (
    <div className='container'>
      <h2>Edit User</h2>
      {user && <Form onSubmit={updateUser} user={user}/> }
    </div>
  )
}

export default UserEdit
