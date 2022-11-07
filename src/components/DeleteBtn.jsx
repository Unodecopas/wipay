import React, { useState } from 'react'
import { useUsers } from '../context/UsersContext'
import Modal from './Modal'
import { useNavigate } from 'react-router-dom'
const DeleteBtn = ({ user }) => {
  const [showModal, setShowModal] = useState(false)
  const { dispatch } = useUsers()
  const navigate = useNavigate()

  const closeModal = () => {
    setShowModal(false)
  }

  const deleteUser = () => {
    dispatch({ type: 'deleted', id: user })
    setShowModal(false)
    navigate('/users')
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className='btn__delete'
        type='button'
      >Delete
      </button>

      {showModal &&
        <Modal
          visible={showModal}
          handleClose={closeModal}
          deleteUser={deleteUser}
        />}
    </>
  )
}

export default DeleteBtn
