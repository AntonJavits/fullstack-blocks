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
    dispatch(setNotification(`Vote for: ${ anecdotes.find(anecdote => anecdote.id === id).content }`))
    dispatch(voteAnecdote(id))

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