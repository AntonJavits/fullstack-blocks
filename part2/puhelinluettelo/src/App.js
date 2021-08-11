import React, { useState } from 'react'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  
  const personsToShow = (filterValue === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
  )

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (persons.find(element => element.name === personObj.name)) {
      window.alert(`${personObj.name} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(personObj))
      setNewName('')
      setNewNumber('')
    }
  }
  const resetFilter = () => {
    setFilterValue('')
  }

  return (
    <div>

      <h1>Phonebook</h1>
      <SearchFilter value={filterValue} handler={handleFilterChange} resetHandler={resetFilter}/>
      
      <h2>Add new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App