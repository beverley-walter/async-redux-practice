function errorMessage (state = null, action) {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
    console.log("err sent to the reducer", action.errorMessage);
      return action.errorMessage
    default:
      return state
  }
}

export default errorMessage
