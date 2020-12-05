const passwordList = (state = {list: []}, action) => {
  switch(action.type) {
    case 'ADD_PASSWORD':
      if (state.list.some(x => x.name === action.name)) {
        throw new Error('Programmer forgot to check duplicate name: ' + action.name);
      }
      return {list: [action, ...state.list]}
    case 'RM_PASSWORD':
      return {list: state.list.filter(x => x.name !== action.name)}
    default:
      return state
  }
}

export default passwordList;
