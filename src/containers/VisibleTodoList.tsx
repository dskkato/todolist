import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'
import {Dispatch} from 'redux'

type Todo = {
  id: number,
  completed: boolean,
  text: string
}
type Todos = Todo[]

type State = {
  visibilityFilter: VisibilityFilters,
  todos: Todo[]
}

const getVisibleTodos = (todos: Todos, filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: Todo) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: Todo) => !t.completed)
  }
}

const mapStateToProps = (state: State) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList