import { ADD_TODO, TOGGLE_TODO } from "../actions";

export type Todo = {
  readonly text: string,
  readonly id: number,
  readonly completed: boolean
}

type TodoAction = {
  readonly type: string,
  readonly id: number,
  readonly text: string,
}

const todos = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

export default todos