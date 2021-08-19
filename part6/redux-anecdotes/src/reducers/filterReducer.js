export const setFilter = (filterValue) => {
  return {
    type: 'SET_FILTER',
    data: filterValue
  }
}

const filterReducer = (state = '', action) => {

  switch (action.type) {
    case 'SET_FILTER':
      const newFiltervalue = action.data
      console.log('filter vlaue: ', newFiltervalue)

      return action.data
    
    default:
      return state
  }
}

export default filterReducer