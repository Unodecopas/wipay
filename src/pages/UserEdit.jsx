import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import { useUsers } from '../context/UsersContext'

const UserEdit = () => {
  const { id } = useParams()
  const { users, dispatch } = useUsers()
  const [user, setUser] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    setUser(users.find(user => user.id === Number(id)))
  }, [id, users])

  const updateUser = (email, password) => {
    dispatch({ type: 'changed', user: { ...user, email, password } })
    navigate(`/users/${id}`)
  }

  return (
    <div className='container'>
      <h2>Edit User</h2>
      {user && <Form onSubmit={updateUser} user={user} />}
    </div>
  )
}

export default UserEdit
