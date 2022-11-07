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
            <tr key={item.id} onClick={(e) => navigateItem(e, item.id)}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.createdAt}</td>
              <td>{item.createdAt}</td>
              <td>
                <button onClick={(e) => navigateEditItem(e, item.id)}>Edit</button>
                <DeleteBtn user={item.id} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
