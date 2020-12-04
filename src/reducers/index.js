import { combineReducers } from 'redux'
import passwordList from './passwordList'
import errors from './errors'

export default combineReducers({
  passwordList,
  errors,
})
