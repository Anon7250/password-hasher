const passwordList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PASSWORD':
      return [action, ...state]
    default:
      return state
  }
}

export default passwordList;
