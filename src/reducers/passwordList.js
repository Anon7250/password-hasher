const passwordList = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PASSWORD':
      if (state.some(x => x.name === action.name)) {
        throw new Error('Programmer forgot to check duplicate name: ' + action.name);
      }
      return [action, ...state]
    case 'RM_PASSWORD':
      return state.filter(x => x.name !== action.name)
    default:
      return state
  }
}

export default passwordList;
