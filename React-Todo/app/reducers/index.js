import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import numberClick from './numberClick';
import showHistory from './showHistory';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  numberClick,
  showHistory
})

export default todoApp
