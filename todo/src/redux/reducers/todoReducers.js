import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../actions/actionTypes";

let intialstate=[
    {id:1,title:"Learn React"},
    {id:2,title:"Learn Node Js"}

]
const todoReducer=(state=intialstate,action)=>{
    if(action.type===ADD_TODO){
        return[...state,action.payload]
        //action.payload is data here we passing
    }
    else if(action.type==REMOVE_TODO){
        //in this 1!==1 it false so remaining id will be store in the state 
       return state.filter((todoObj)=>todoObj.id!==action.payload)
    }
    else if(action.type===UPDATE_TODO){
       let{id,updateTodo}=action.payload;
       
       console.log(id,updateTodo)
       
       return state.map((todoobj)=>{
        if(todoobj.id === id){
            return {...todoobj,title:updateTodo}
        }
        else{
            return todoobj;
        }
       })
    }
    else{
        return state;
    }
}

export default todoReducer;
