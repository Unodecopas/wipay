import React, { useEffect, useState } from 'react'
import { useUsers } from '../context/UsersContext'
import { useNavigate } from 'react-router-dom'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import orderState from '../utils/orderState'
import Selector from '../components/Selector'

const UsersPage = () => {
  const { users } = useUsers()
  const navigate = useNavigate()
  const [usersState, setUsersState] = useState([])
  const [showUsers, setShowUsers] = useState([])
  const [orderBy, setOrderBy] = useState('id')

  useEffect(() => {
    const orderedUsers = orderState(users, orderBy)
    setUsersState(orderedUsers)
  }, [users, orderBy])

  const createUser = () => {
    navigate('/users/create')
  }

  const navigateUser = (id) => {
    navigate(`/users/${id}`)
  }
  const navigateEditUser = (id) => {
    navigate(`/users/${id}/edit`)
  }

  const handleUsers = (users) => {
    setShowUsers(users)
  }
  const handleOrder = (value) => {
    setOrderBy(value)
  }
  return (
    <div className='container'>
      <div className='switcher'>
        <button onClick={() => createUser()}>Add User</button>
        <Selector options={[
          { label: 'id', value: 'id' },
          { label: 'Email', value: 'email' },
          { label: 'Created At', value: 'createdAt' },
          { label: 'Updated At', value: 'updatedAt' }
        ]} onChange={handleOrder}
            />
      </div>
      {users
        ? <Table items={showUsers} navigateItem={navigateUser} navigateEditItem={navigateEditUser}/>
        : <p> Nothing to show </p>
      }
      <Pagination items={usersState} itemsPerPage={10} setItems={handleUsers} />
    </div>
  )
}

export default UsersPage
