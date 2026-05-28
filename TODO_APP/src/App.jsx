import TodoUse from "./context/TodoUse.jsx"
import { useEffect, useState } from "react"
import TodoComp from "./components/TodoComp"
import TodoForm from "./components/TodoForm.jsx"
function App() {
  const [todoList,settodos]=useState([])

            const addTodo=(todomes)=>{
              settodos((prev)=>([todomes,...prev]))
            }
            const deletetodo=(id)=>{
              settodos((prev)=>(prev.filter((pretodos)=>(pretodos.id!=id))))
            }
            const updatetodo=(todomes,id)=>{
              settodos((prev)=>(prev.map((prevtodo)=>(prevtodo.id===id?{...prevtodo,todomes}:prevtodo))))
            }

            useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList))
  }, [todoList])
  return (
    <>
      <TodoUse
  todoList={todoList}
  addTodo={addTodo}
  deletetodo={deletetodo}
  updatetodo={updatetodo}
>
          <TodoForm/>

          {
              todoList.map((todo)=>(
                <TodoComp key={todo.id} todo={todo}/>
              )

              )
          }
                     
      </TodoUse>
    </>
  )
}

export default App
