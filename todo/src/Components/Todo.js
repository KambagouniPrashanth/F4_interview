import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { addToDO, removeToDo, updateToDo } from '../redux/actions/todoActions'

const Todo=()=>{
   
   
    const[input,setInput]=useState("")
    const todoArray=useSelector(state=>state)
    const[editTodoid,setEditTodoId]=useState(null)
    const dispatch=useDispatch()
   
    function addTask(){
        editTodoid===null?dispatch(addToDO({id:todoArray.length+1,title:input})):
        dispatch(updateToDo(editTodoid,input))

        setInput("");
    }
    return(
        <div>
            {editTodoid==null?<h1>Add Task</h1>:<h1>updeated Todo with id{editTodoid}</h1>}

            <input type='text' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    todoArray && todoArray.map((value)=>(
                        <div key={value.id}>
                            <li>
                                {value.title}
                                <button onClick={()=>dispatch(removeToDo(value.id))}>D</button>
                                <button onClick={()=>setEditTodoId(value.id)}>U</button>

                            </li>
                            
                            

                            
                        


                        </div>
                       
                    ))

                }
            </ul>

        </div>
    )
}
export default Todo;