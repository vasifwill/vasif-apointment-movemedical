import React from 'react'

export const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
        <td>
        <input
        type="date"
        name='date'
        required="required"
        value={editFormData.date}
        onChange={handleEditFormChange}
      />
        </td>
        <td>
        <input
        type="time"
        name='time'
        required="required"
        value={editFormData.time}
        onChange={handleEditFormChange}
      />
        </td>
        <td>
      <select onChange={handleEditFormChange} name='location' value={editFormData.location}>
        <option value="San Diego"> San Diego</option>
        <option value="Portland"> Portland</option>
        <option value="Seattle" >Seattle</option>
        <option value="London">London</option>
        <option value="Orlando"> Orlando</option>
      </select>
        </td>
        <td>
        <input
        type="text"
        name='description'
        required="required"
        placeholder='enter decsription'
        value={editFormData.description}
        onChange={handleEditFormChange}
      />
        </td>
        <td >
        <button type="submit"> Save </button>
        <button type="submit" onClick={handleCancelClick}> Cancel </button> 
        </td>
     
    </tr>
  )
}
