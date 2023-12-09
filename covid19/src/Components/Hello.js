import React,{useState} from "react";



const Hello=()=>{
    const[hello,setHello]=useState("Hello")
    function Change(){
        setHello("Greetings")
    }
   return(
    <div>
        <h1>{hello}</h1>
        <button onClick={Change}>Click me</button>

    </div>
   )
}

export default Hello;