import React,{useState} from 'react'


const TextEditor=()=>{
    const[input,setInput]=useState('');
    const[list,setList]=useState([])
    const[isAppendDisabled,setIsAppendDisabled]=useState(true);
    const[isUndoDisabled,setIsUndoDisabled]=useState(true);
    function handleinput(e){
        setInput(e.target.value)
        
        setIsAppendDisabled(e.target.value==='')

    }
    function appendData(){
        setList([...list,input]);
        setIsAppendDisabled(true)
        setIsUndoDisabled(false)

    }
    function undoData(){
        let newList=[...list];
        newList.pop();
        setList(newList)
        setIsAppendDisabled(true)
        setIsUndoDisabled(newList.length==0)

    }
    return(
        <div>
            <input type='text' onChange={handleinput}/>
            <button onClick={appendData} disabled={{isAppendDisabled}}>Append</button>
            <button onClick={undoData} disabled={{isUndoDisabled}}>Append</button>
            <ul>
                {
                    list && list.map((item,index)=>{
                        <li key={index}>{item}</li>
                    })
                }
            </ul>

        </div>
    )
}

export default TextEditor;