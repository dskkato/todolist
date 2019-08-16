import { connect } from 'react-redux'
import { toggleTodo, VisibilityFilters } from '../actions'
import TodoList from '../components/TodoList'
import { Dispatch } from 'redux'
import { RootState, Todo } from '../reducers';

const getVisibleTodos = (todos: Todo[], filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t: Todo) => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t: Todo) => !t.completed)
    default:
      throw new Error('Unknow filter: ' + filter)
  }
}

const mapStateToProps = (state: RootState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList) 