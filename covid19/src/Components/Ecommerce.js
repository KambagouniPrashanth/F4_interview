import React, { useState } from "react";



const Ecommerce=()=>{
    const[items,setItems]=useState(0)
    
    function increment(){
        setItems(items+1)

    }
    function decrement(){
        setItems(items-1)

    }
    return(
        <div className="Ecommerce">
            <h1>Quantity{items}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>


        </div>
    )
}
export default Ecommerce;