import anecdoteService from '../services/anecdotes'
// const getId = () => (100000 * Math.random()).toFixed(0)

export const voteAnecdote = (obj) => {
  return async dispatch => {
    const response = await anecdoteService.update(obj, obj.id)
    console.log('response from put: ', response)
    dispatch({
      type: 'VOTE',
      data: obj.id
    }) 
  }
}

export const addNewAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)    
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => { 
  switch (action.type) {
    case 'VOTE':
      const id = action.data
      const votedAnecdote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...votedAnecdote,
        votes: votedAnecdote.votes + 1
      }
      const updatedVotes = state.map(anecdote => 
          anecdote.id !== id ? anecdote : changedAnecdote 
          ).sort((a, b) => b.votes - a.votes)
      return updatedVotes
      
    case 'ADD_ANECDOTE':
      const updatedAnecdotes = [ ...state, action.data ]
      return updatedAnecdotes
        
    case 'INIT_ANECDOTES':
      return action.data

    default:
      return state
  }
} 

export default anecdoteReducer