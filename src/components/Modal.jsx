const Modal = ({ visible, deleteUser, handleClose }) => {
  return (
    <div className={`modal-container ${visible ? 'visible' : ''}`}>
      <div className="modal">
        <p>Estas seguro de que deseas borrar el usuario ?</p>
        <div className="modal__btns">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={deleteUser} className='btn__delete'>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
