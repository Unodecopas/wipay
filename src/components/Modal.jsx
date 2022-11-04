const Modal = ({ visible, deleteUser, handleClose }) => {
  return (
    <div className={`modal-container ${visible ? 'visible' : ''}`}>
      <div className="modal">
        <p>Are you sure?</p>
        <div className="modal__btns">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={deleteUser} className='btn__delete'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
