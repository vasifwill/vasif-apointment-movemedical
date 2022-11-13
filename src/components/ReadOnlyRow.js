import React from 'react'

export const ReadOnlyRow = ({contact, handleEditClick, handleDeleteClick}) => {
  return (
    <tr>
    <td>{contact.date}</td>
    <td>{contact.time}</td>
    <td>{contact.location}</td>
    <td>{contact.description}</td>
    <td>
        <button type='button' onClick={(e) => handleEditClick(e, contact)}>Edit</button>
        <button type='button' onClick={(e) => handleDeleteClick(contact.id)}>Delete</button>
    </td>
  </tr>
  )
}
