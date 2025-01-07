import React, { useState } from 'react'

const ToDoList = () => {

    const [todo,setTodo] = useState([])
    const [task,setTask] = useState('')

    const addTask = (e)=>{
        e.preventDefault();
        if(task.trim()){
        setTodo([...todo,task]);
        setTask('');
        }
    }
  return (
    <div>
        <form action="" onSubmit={addTask}>
        <p>Enter your task:</p>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button type='submit'>Task add</button>
        </form>
        <ul>
            {todo.map((x,ind)=>(
                <li key={ind}>{x}</li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoList