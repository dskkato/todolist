import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

export type Todo = {
  text: string,
  completed: boolean
}

export type Todos = Todo[]

type TodoAction = {
  type: string,
  text: string,
  index: number
}

type VisibilityAction = {
  type: string,
  filter: VisibilityFilters,
}

export type RootState = {
  todos: Todos,
  visibilityFilter: VisibilityFilters
}

function todos(state: Todos = [], action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text, 
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        console.log(todo.completed)
        if (index === action.index) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

const SHOW_ALL = VisibilityFilters.SHOW_ALL

function visibilityFilter(state: VisibilityFilters = SHOW_ALL, actoin: VisibilityAction) {
  switch (actoin.type) {
    case SET_VISIBILITY_FILTER:
      return actoin.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp