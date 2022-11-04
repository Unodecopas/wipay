import { createContext, useContext, useReducer } from 'react'
import { initialData } from '../data/initialData'
// const initialUsers = [
//   { id: 1, email: 'Larue_Rau85@yahoo.com', password: '123456a', createdAt: '2022-01-03', updatedAt: '2022-03-01' },
//   { id: 2, email: 'Kassandra4@hotmail.com', password: '12345b', createdAt: '2022-04-12', updatedAt: '2022-04-12' },
//   { id: 3, email: 'Jeanne63@yahoo.com', password: '123456c', createdAt: '2022-05-03', updatedAt: '2022-06-01' }
// ]

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
