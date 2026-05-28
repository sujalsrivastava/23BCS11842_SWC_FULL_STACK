import React, { useContext, useState } from "react";
import TodoUse from "../context/TodoUse";
import { TodoContext } from "../context/TodoContext";
function TodoForm() {
    const [msg,setmsg]=useState("");
    const {addTodo}=useContext(TodoContext)
    const add=(e)=>{
        e.preventDefault()
        addTodo({id:Date.now(),todomes:msg,isEditable:false})
        setmsg("")
    }
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center bg-white shadow-xl rounded-2xl p-2 w-full max-w-xl">
        <input
       
          type="text"
          placeholder="Enter your task..."
          className="flex-1 px-5 py-3 outline-none rounded-xl text-gray-700 placeholder-gray-400"
          value={msg}
          onChange={(e)=>(setmsg(e.target.value))}
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-md"
          onClick={add}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoForm;