import React, {useState, Fragment} from 'react';
import {nanoid} from  "nanoid";
import './App.css';
import info from "./data.json"
import { ReadOnlyRow } from './components/ReadOnlyRow';
import { EditableRow } from './components/EditableRow';

function App() {

  //current appointments
  const [contacts, setContacts] = useState(info)

  ///new appointments
  const [addFormData, setAddFormData] = useState({
    date: "",
    time: "",
    location: "",
    description: "",

  }) 

  /// edit current appointments
  const [editFormData, setEditFormData] = useState(
    {
      date: "",
      time: "",
      location: "",
      description: "",
  
    }
  )

  /// helping to show edit and save button
  const [editContactId, setEditContactId] = useState(null)
///////// implements adding new appointment
  const handleAddFormChange = (e)=> {    
    e.preventDefault()

    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value

    const newAppointment = {...addFormData} 
    newAppointment[fieldName] = fieldValue

    setAddFormData(newAppointment)
  }

  ////////
  
  const handleEditFormChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.getAttribute("name")
    const fieldValue = e.target.value

    const newAppointment = {...editFormData} 
    newAppointment[fieldName] = fieldValue

    setEditFormData(newAppointment)

  }

   ////////

  const handleAddFormSubmit = (e) => {
    e.preventDefault()

    const newContact = {
      id:nanoid(),
      date: addFormData.date,
      time:addFormData.time,
      location:addFormData.location,
      description:addFormData.description
    }

    const newContacts = [...contacts, newContact]
    setContacts(newContacts)
  }

  //////////

  const handleEditFormSubmit = (e) => {
    e.preventDefault()

    const editedContact = {
      id:editContactId,
      date: editFormData.date,
      time:editFormData.time,
      location:editFormData.location,
      description:editFormData.description

    }

    const newContacts = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === editContactId)
    newContacts[index] = editedContact

    setContacts(newContacts)
    setEditContactId(null)
  }

/////////

  const handleEditClick = (e, contact) => {
    e.preventDefault()
    setEditContactId(contact.id)

    const formValues = {
      date: contact.date,
      time:contact.time,
      location:contact.location,
      description:contact.description
    }

    setEditFormData(formValues)
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }

  const handleDeleteClick = (contactId) => {
    const newContacts = [... contacts]

    const index = contacts.findIndex((contact) => contact.id === contactId)

    newContacts.splice(index, 1)

    setContacts(newContacts)
  }



  return (
    <div className="app-container">
    <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Location</th>
          <th>Description</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(contact => (
        <Fragment>
        {editContactId === contact.id ? (<EditableRow editFormData = {editFormData} handleEditFormChange={handleEditFormChange}  handleCancelClick={handleCancelClick}/>) : (<ReadOnlyRow contact = {contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>)}
        </Fragment>
      ))}
        
      </tbody>
    </table>
    </form>
    <h2> Add New Appointment</h2>
    <form className="add" onSubmit={handleAddFormSubmit}>
      <input
        type="date"
        name='date'
        required="required"
        onChange={handleAddFormChange}
      />
      <input
        type="time"
        name='time'
        required="required"
        onChange={handleAddFormChange}
      />
      <select onChange={handleAddFormChange} name='location'>
        <option value="San Diego"> San Diego</option>
        <option value="Portland"> Portland</option>
        <option value="Seattle" >Seattle</option>
        <option value="London">London</option>
        <option value="Orlando"> Orlando</option>
      </select>
      <input
        type="text"
        name='description'
        required="required"
        placeholder='enter decsription'
        onChange={handleAddFormChange}
      />
      <button type='submit'> Add Appoitment</button>
    </form>

    
    
    </div>
  );
}

export default App;
