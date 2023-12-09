import React,{useState} from 'react'


const TextEditor1=()=>{
    const[input,setInput]=useState('');
    const[list,setList]=useState([])
    const[isAppendDisabled,setIsAppendDisabled]=useState(true);
    const[isUndoDisabled,setIsUndoDisabled]=useState(true);
    
    const handleinput=(e)=>{
        console.log("called")
        setInput(e.target.value)
        
        setIsAppendDisabled(e.target.value==='')

    }
    const appendData=()=>{
        console.log(list)
        setList([...list,input]);
        setInput('')
        setIsAppendDisabled(true)
        setIsUndoDisabled(false)

    }
    
    const undoData=()=>{
        let newList=[...list];
        newList.pop();
        setList(newList)
        setIsAppendDisabled(false)
        setIsUndoDisabled(newList.length==0)

    }
    return(
        <div>
            <input type='text' value={input} onChange={handleinput} placeholder='Enter an element'/>
            <button onClick={appendData} disabled={isAppendDisabled}>Append</button>
            <button onClick={undoData} disabled={isUndoDisabled}>Undo</button>
           <div>
           <ul>
                {
                     list.map((item,index)=>(
                        <p key={index}>{item}</p>
                     ))
                }
            </ul>
           </div>

        </div>
        
    )
}

export default TextEditor1;