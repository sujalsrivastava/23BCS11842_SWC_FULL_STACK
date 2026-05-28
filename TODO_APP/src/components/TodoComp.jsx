import React, { useContext, useState,useRef } from 'react'
import pen from "../assets/pen.png"
import bin from "../assets/bin.png"
import { TodoContext } from '../context/TodoContext'
function TodoComp({todo}) {
   const [mes,setmsg]=useState(todo.todomes)
   const [edit,setedit]=useState(todo.isEditable)
   const inputRef = useRef(null)
   const {updatetodo,deletetodo}=useContext(TodoContext)
 return (
   
      <div className="tasks" className='border-amber-400 flex border-2 h-20 rounded-4xl flex-row bg-purple-500 justify-around items-center'>
         <div className="left">
            <input  ref={inputRef} type="text" className='bg-purple-500' value={mes} readOnly={!edit} 
            onChange={(e)=>{
               setmsg(e.target.value)
            }}/>
         </div>
         <div className="right">
            <button className='border-4 border-amber-50' onClick={(e)=>{
               setedit(true)
               
               if(edit){
                  updatetodo(mes,todo.id)
                  setedit(false)
               }
               else{
                  inputRef.current.focus()
               }
            }}> <img src={pen} alt="" className='h-7'/></button>
            <button onClick={()=>{
               deletetodo(todo.id)
            }} className='border-4 border-amber-50'> <img src={bin} alt="" className='h-7'/></button>
         </div>
      </div>
   
 )
}

export default TodoComp
