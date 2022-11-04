import { Routes, Route } from 'react-router-dom'
import UsersList from './pages/UsersList'
import UserDetails from './pages/UserDetails'
import { HomePage } from './pages/HomePage'
import UserEdit from './pages/UserEdit'
import Navbar from './components/Navbar'
import CreateUser from './pages/CreateUser'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersList />}/>
          <Route path='/users/create' element={<CreateUser />}/>
          <Route path='/users/:id' element={<UserDetails />}/>
          <Route path='/users/:id/edit' element={<UserEdit/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
