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
        <div className='user__details'>
          <div>
            <p>ID:</p>
            <p>Email:</p>
            <p>Password:</p>
            <p>Created At: </p>
            <p>Updated At: </p>
          </div>
          <div>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.createdAt}</p>
            <p>{user.updatedAt}</p>
          </div>
        </div>
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
