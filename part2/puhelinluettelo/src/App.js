import React, { useState, useEffect } from 'react'
import personsService from './services/persons'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import './App.css'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  
  useEffect(() => {
    personsService
      .getAll()
      .then(response => 
        setPersons(response.data)
      )
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
  }
  const resetFilter = () => {
    setFilterValue('')
  }

  const updatePersons = (obj) => {    
    personsService
      .update( { ...obj, number: newNumber }, persons[persons.findIndex(x => x.name === newName)].id )
      .then(response => {
       setPersons(persons.map(person => person.id !== response.data.id ? person : response.data))
      })
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }
    if (persons.find(element => element.name === personObj.name)) {
      window.confirm(`${personObj.name} is already added to the phonebook. Replace the old number with a new on?`) && 
      updatePersons(personObj)
    } else {
      personsService
        .create(personObj)
        .then(response => {
          console.log('response after post', response)
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const handleDelete = (id) => {
    window.confirm(`Delete ${persons[persons.findIndex(x => x.id === id)].name}?`) && 
    personsService
      .deletePerson(id)
      .then(response => {
        const updatedPersons = persons.filter((person) => {
          return (person.id !== id)
        })
        setPersons(updatedPersons)
      })
  }

    const personsToShow = (filterValue === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
  )

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
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />

    </div>
  )
}

export default App