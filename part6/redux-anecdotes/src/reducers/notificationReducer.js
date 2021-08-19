export const setNotification = (msg) => { 
  return {
    type: 'SET_NOTIFICATION',
    data: msg
  }
}

const notificationReducer = (state = '', action) => {
  
  switch (action.type) {
    case 'SET_NOTIFICATION':      
      const newNotification = action.data
      console.log('ntf', newNotification);

      return action.data
      
    default:
      return state
  }
} 

export default notificationReducer