import React from 'react'
import Todo from './Todo'

type Props = {
  readonly todos: {
    readonly id:number
    readonly completed: boolean,
    readonly text: string,
  }[],
  readonly toggleTodo: (index: number) => void
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      ))}
    </ul>
  )
}

export default TodoList