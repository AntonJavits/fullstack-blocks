import React, { useState, useEffect } from 'react'
import personsService from './services/personService'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  const [ message, setMessage ] = useState(null)
  
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
      .catch(error => {
        setMessage(
          `Contact ${obj.name} can't be updated, it's deleted from the server`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
      setMessage(
        `Contact ${obj.name} is updated`
      )
      setTimeout(() => {
        setMessage(null)
      }, 5000)

      
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
          
          setMessage(
            `Contact ${personObj.name} added to the phonebook`
          )
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const handleDelete = (id) => {
    let name = persons[persons.findIndex(x => x.id === id)].name
    window.confirm(`Delete ${name}?`) && 
    personsService
      .deletePerson(id)
      .then(response => {
        const updatedPersons = persons.filter((person) => {
          return (person.id !== id)
        })
        setPersons(updatedPersons)

        setMessage(
          `Contact ${name} is deleted`
        )
        setTimeout(() => {
          setMessage(null)
        }, 5000)
      })
  }

    const personsToShow = (filterValue === '')
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterValue.toLowerCase())
  )

  return (
    <div>
      <Notification message={message} />

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