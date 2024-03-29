/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
}

/*
 * action creators
 */

let nextTodoId = 0
export const addTodo = (text: string) => (
  {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
)

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id
})

export const setVisibilityFilter = (filter: VisibilityFilters) => ({
  type: SET_VISIBILITY_FILTER, filter
})