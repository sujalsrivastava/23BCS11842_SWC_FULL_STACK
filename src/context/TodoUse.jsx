import { TodoContext } from "./TodoContext";
import React from 'react'

function TodoUse(props) {
    const todos={
            todoList:props.todos,
            addTodo:props.addTodo,
           deletetodo: props.deletetodo,
          updatetodo: props.updatetodo
    }
  return (
    <TodoContext.Provider value={todos}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoUse