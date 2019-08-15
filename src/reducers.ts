import { combineReducers } from 'redux'
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

type Todo = {
  text: string,
  completed: boolean
}

type TodoAction = {
  type: string,
  text?: string,
  index?: number
}

type VisibilityAction = {
  type: string,
  filter: VisibilityFilters,
}

function todos(state: Todo[] = [], action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text ? action.text : "", // 冗長な記述
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        console.log(todo.completed)
        if (index === action.index) {
          return {
            ...todo,
            completed: todo.completed ? !todo.completed : true// 冗長な記述
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