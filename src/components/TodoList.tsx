import React from 'react'
import Todo from './Todo'

type Props = {
  todos: {
    completed: boolean,
    text: string
  }[],
  onTodoClick: (index: number) => void
}

const TodoList: React.FC<Props> = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          completed={todo.completed}
          text={todo.text}
          onClick={() => onTodoClick(index)}
        />
      ))}
    </ul>
  )
}

export default TodoList