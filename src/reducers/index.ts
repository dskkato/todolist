import { combineReducers } from 'redux'
import { VisibilityFilters } from '../actions'
import visibilityFilter from './visibilityFilter'
import todos, { Todo } from './todos'

export type Todo = Todo

export type RootState = {
  readonly todos: Todo[],
  readonly visibilityFilter: VisibilityFilters
}

export default combineReducers({
  visibilityFilter,
  todos
})
