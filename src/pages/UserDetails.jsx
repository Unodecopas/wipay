import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DeleteBtn from '../components/DeleteBtn'
import { useUsers } from '../context/UsersContext'

const UserDetails = () => {
  const { id } = useParams()
  const { users } = useUsers()
  const [user, setUser] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    setUser(users.find(user => user.id === Number(id)))
  }, [id, users])

  return (
    <div className='container'>
      <h2>User Details</h2>
      {user &&
        <>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <p>Created At: {user.createdAt}</p>
          <p>Last updated{user.updatedAt}</p>
           <div className='form__btns'>
            <button onClick={() => navigate(`/users/${user.id}/edit`)}>Edit</button>
            <DeleteBtn user={user.id}/>
          </div>
        </>
      }
    </div>
  )
}

export default UserDetails
