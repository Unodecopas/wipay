import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import DeleteBtn from '../components/DeleteBtn'
import { useUsers } from '../context/UsersContext'

const UserDetails = () => {
  const { id } = useParams()
  const { users } = useUsers()
  const [user, setUser] = useState()

  useEffect(() => {
    setUser(users.find(user => user.id === Number(id)))
  }, [id, users])

  return (
    <div className='container'>
      <h2>User Details</h2>
      {user &&
        <>
          <div className='form__btns'>
            <button><Link to={`/users/${id}/edit`}>Edit</Link></button>
            <DeleteBtn user={user.id}/>
          </div>
          <p>ID: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          <p>Created At: {user.createdAt}</p>
          <p>Last updated{user.updatedAt}</p>
        </>
      }
    </div>
  )
}

export default UserDetails
