import React, { useEffect, useState } from 'react'
import validator from 'validator'
import DeleteBtn from './DeleteBtn'

const Form = ({ onSubmit, user }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  useEffect(() => {
    if (user) {
      setEmail(user.email)
      setPassword(user.password)
    }
  }, [user])

  useEffect(() => {
    if (email.length === 0 || password.length === 0) setError({ email: '', password: '' })
  }, [email, password])

  const handleForm = (e) => {
    e.preventDefault()
    if (!validator.isEmail(email)) setError({ ...error, email: 'Incorrect email format (someone@example.com)' })
    if (!validator.isStrongPassword(password)) {
      setError({
        ...error,
        password: 'Password must have 8 characteres, 1 symbol, 1 lowerCase, 1 UpperCase '
      })
      setTimeout(() => {
        setError({ error: '', password: '' })
      }, 2000)
    }
    if (validator.isEmail(email) && validator.isStrongPassword(password)) {
      onSubmit(email, password)
      setMessage('User edited succesfully')
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
  }

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="email">
        <input type="email" name="email" id="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
      </label>
      <label htmlFor="password">
        <input type="password" name="password" id="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)}/>
      </label>
      <div className='form__btns'>
        {user && <DeleteBtn user={user.id}/>}
        <button className='btn__success' type='submit'>Done</button>
      </div>
      {error.email && <p className='error'>{error.email}</p>}
      {error.password && <p className='error'>{error.password}</p>}
      {message && <p className='success'>{message}</p>}
    </form>

  )
}

export default Form
