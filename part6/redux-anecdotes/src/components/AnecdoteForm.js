import { useDispatch } from 'react-redux'
import { addNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''     
    dispatch(setNotification(`New anecdote: ${content}`))
    dispatch(addNewAnecdote({ 'content' : content, 'votes' : 0 }))
 
    setTimeout(() => {
      dispatch(setNotification(''))
    }, 3000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name={'anecdote'}/></div>
        <button type={'submit'}>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm