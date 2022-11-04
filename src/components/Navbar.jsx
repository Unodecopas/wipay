import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.png'
const Navbar = () => {
  return (
     <nav>
      <div className='img__container'>
        <img src={logo} alt="" />
      </div>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/users'>Users</NavLink></li>
          <li><NavLink to='/users/create'>Add User</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar
