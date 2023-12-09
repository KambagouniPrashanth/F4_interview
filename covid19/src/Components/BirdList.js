import React,{useState} from 'react'


const BirdList=()=>{
    const[bird,setBird]=useState([])
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[state,setState]=useState(false)
    function birditems(){
        setState(true)
        setCount1(0)
    }
    return(
        <div>
            <input type='text' onChange={(e)=>setBird([...bird,e.target.value])}/>
            <button onClick={birditems}>Add</button>

            <div>
                <ul>
                    <li>Robin</li>
                   
                    <span>likes {count}</span>
                    <button onClick={()=>setCount(count+1)}>+</button>

                   
                    

                </ul>
            </div>
            {
             state&& bird.map((bir)=>(
                    <ul>
                    <li>{bir}</li>
                    
                    <span>likes {count1}</span>
                    <button onClick={()=>setCount1(count1+1)}>+</button>

                    

                    </ul>
                ))

            }

        </div>
        

    )
}
export default BirdList;