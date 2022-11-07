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
  const [searchTerm, setSearchTerm] = useState('')
  const [showUsers, setShowUsers] = useState([])
  const [orderBy, setOrderBy] = useState('id')

  useEffect(() => {
    const searchFiltered = users.filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase()))
    const orderedUsers = orderState(searchFiltered, orderBy)
    setUsersState(orderedUsers)
  }, [users, orderBy, searchTerm])

  const createUser = () => {
    navigate('/users/create')
  }

  const navigateUser = (e, id) => {
    e.stopPropagation()
    navigate(`/users/${id}`)
  }
  const navigateEditUser = (e, id) => {
    e.stopPropagation()
    navigate(`/users/${id}/edit`)
  }

  const handleUsers = (users) => {
    setShowUsers(users)
  }
  const handleOrder = (value) => {
    setOrderBy(value)
  }
  return (
    <div className='container__table'>
      <div className='switcher'>
        <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} autoComplete='off' placeholder='Search Email ...' />
        <button onClick={() => createUser()}>Add User</button>
        <Selector
          options={[
            { label: 'id', value: 'id' },
            { label: 'Email', value: 'email' },
            { label: 'Created At', value: 'createdAt' },
            { label: 'Updated At', value: 'updatedAt' }
          ]}
          onChange={handleOrder}
        />
      </div>

      {users
        ? <Table items={showUsers} navigateItem={navigateUser} navigateEditItem={navigateEditUser} />
        : <p> Nothing to show </p>}
      <Pagination items={usersState} itemsPerPage={8} setItems={handleUsers} />
    </div>
  )
}

export default UsersPage
