import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filterValue = useSelector(state => state.filter)

  const anecdotesFiltered = (filterValue === '')
    ? anecdotes
    : anecdotes.filter( anecdote => anecdote.content.toLowerCase().includes(filterValue.toLowerCase()) )    
    
  const dispatch = useDispatch()

  
  const vote = (id) => {
    const votedAnecdote = anecdotes.find(anecdote => anecdote.id === id)
    dispatch(setNotification(`Vote for: ${voteAnecdote.content}`))
    dispatch(voteAnecdote(votedAnecdote))

    setTimeout(() => {
      dispatch(setNotification(''))
    }, 3000) 
  }

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotesFiltered.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList