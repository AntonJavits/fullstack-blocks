import React, { useEffect } from 'react'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(initializeAnecdotes())
  }, [dispatch])
  
  return (
    <div>
      <Filter />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm /> 
    </div>
  )
}

export default App