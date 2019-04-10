import * as React from 'react'
import Todo, { TodoProps } from './Todo'

interface TodoListProps {
    todos: TodoProps[],
    toggleTodo: (id: number) => Event
} 

const TodoList = ({ todos, toggleTodo } : TodoListProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
export default TodoList
