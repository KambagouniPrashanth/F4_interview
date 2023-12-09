import React,{useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {add_bird,delete_bird,like_bird} from "../redux/action/birdActions";

const Bird=()=>{
   const birddata=useSelector(state=>state);
   const dispatch=useDispatch();
   const [input,setInput]=useState("");
   const [birdid,setBirdid]=useState(1);
   
   
   function implement(e){
    e.preventDefault();
    dispatch(add_bird({id:birdid,name:input,likes:0}))
    setBirdid(birdid+1);
    setInput("");
   }
   return(
    <div>
        <input type="text" placeholder="enter bird name" onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={implement}>Add</button>
        <ul>
        {
            birddata&&birddata.map(val=>(
             <li key={val.id}>
                <p>{val.name}</p>
                <span>likes:{val.likes}</span>
                <button onClick={()=>dispatch(like_bird(val.id))}>+</button>
                <button onClick={()=>dispatch(delete_bird(val.id))}>delete</button>
             </li>
            ))
        }
        </ul>
    </div>
   )
}
export default Bird;