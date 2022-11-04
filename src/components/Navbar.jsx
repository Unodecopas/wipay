import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
     <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/users'>Users</NavLink></li>
          <li><NavLink to='/users/create'>Add User</NavLink></li>
        </ul>
      </nav>
  )
}

export default Navbar
