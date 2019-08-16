import React from 'react'

type Props = {
  readonly onClick: () => void,
  readonly completed: boolean,
  readonly id:number,
  readonly text: string
}

const Todo: React.FC<Props> = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  )
}

export default Todo