import * as React from 'react'

export interface TodoProps {
    id: number,
    onClick: () => Event,
    completed: boolean,
    text: string,
}


const Todo = ({ onClick, completed, text } : TodoProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo
