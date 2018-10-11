import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import session from './session'
import pages from './pages'
import view from './view'

export default combineReducers({
  routing: routerReducer,
  session,
  pages,
  view,
})
