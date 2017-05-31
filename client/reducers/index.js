import {combineReducers} from 'redux'

import subreddits from './subreddits'
import errorMessage from './errorMessage'

export default combineReducers({
  subreddits,
  errorMessage
})
