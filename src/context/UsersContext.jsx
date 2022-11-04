import { createContext, useContext, useReducer } from 'react'
import { initialData } from '../data/initialData'

const UsersContext = createContext(null)

export function UsersProvider ({ children }) {
  const [users, dispatch] = useReducer(usersReducer, initialData)

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
        {children}
    </UsersContext.Provider>
  )
}

export const useUsers = () => {
  const users = useContext(UsersContext)
  return users
}

function usersReducer (users, action) {
  switch (action.type) {
    case 'added': {
      return [...users, {
        id: Math.max(...users.map(user => user.id)) + 1,
        email: action.email,
        password: action.password,
        createdAt: new Date().toISOString().substring(0, 10),
        updatedAt: new Date().toISOString().substring(0, 10)
      }]
    }
    case 'changed': {
      return users.map(user => {
        if (user.id === action.user.id) {
          return { ...action.user, updatedAt: new Date().toISOString().substring(0, 10) }
        } else {
          return user
        }
      })
    }
    case 'deleted': {
      return users.filter(user => user.id !== action.id)
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}
