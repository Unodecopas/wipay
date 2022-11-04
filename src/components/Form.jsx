import React, { useEffect, useState } from 'react'
import validator from 'validator'

const Form = ({ onSubmit, user }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({ email: '', password: '' })
  useEffect(() => {
    if (user) {
      setEmail(user.email)
      setPassword(user.password)
    }
  }, [user])

  const handleForm = (e) => {
    e.preventDefault()
    if (!validator.isEmail(email)) setError({ ...error, email: 'Incorrect email format (someone@example.com)' })
    if (!validator.isStrongPassword(password)) {
      setError({
        ...error,
        password: 'Password must have 8 characteres, 1 symbol, 1 lowerCase, 1 UpperCase '
      })
    }
    if (validator.isEmail(email) && validator.isStrongPassword(password)) onSubmit(email, password)
  }
  const resetForm = (e) => {
    e.preventDefault()
    if (user) {
      setEmail(user.email)
      setPassword(user.password)
    } else {
      setEmail('')
      setPassword('')
    }
    setError({ email: '', password: '' })
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
        <button onClick={(e) => resetForm(e)}>{user ? 'Reset' : 'Clear'}</button>
        <button className='btn__success'>Done</button>
      </div>
      {error.email && <p className='error'>{error.email}</p>}
      {error.password && <p className='error'>{error.password}</p>}
    </form>

  )
}

export default Form
