import { ADD_TODO,REMOVE_TODO,UPDATE_TODO } from "./actionTypes";

export const addToDO=(newtodo)=>{
    return(
        {
            type:ADD_TODO,
            payload:newtodo
            
        }
    )
}

export const removeToDo=(todoid)=>{
    return(
        {
            type:REMOVE_TODO,
            payload:todoid
        }
    )

}

export const updateToDo=(id,updatetodo)=>{
    return(
        {
            type:UPDATE_TODO,
            payload:{
                id:id,
                updateToDo:updatetodo,

            }
        }
    )
}