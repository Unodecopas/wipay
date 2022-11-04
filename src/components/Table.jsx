import React from 'react'
import DeleteBtn from './DeleteBtn'

const Table = ({ items, navigateItem, navigateEditItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Password</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items && items.map(item => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td onClick={() => navigateItem(item.id)} className='link'>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.createdAt}</td>
              <td>{item.createdAt}</td>
              <td>
                <button onClick={() => navigateEditItem(item.id)}>Edit</button>
                <DeleteBtn user={item.id}/>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
