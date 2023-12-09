import React,{useState} from 'react';
import axios from 'axios'


const SortNames=()=>{
    const[users,setUsers]=useState();
    const[sortOrder,setSortOrder]=useState(0);
    async function getUser(){
        const APIURL = "https://jsonplaceholder.typicode.com/users" ;
        let response=await axios.get(APIURL);
        console.log(response.data)
        setUsers(response.data)
            
    }

    function sortUser(){
        if(sortOrder===0 || sortOrder==1){
            setUsers([...users].sort((a,b)=>a.name.length-b.name.length))
            setSortOrder(2);
            return;
        }
        else if(sortOrder===2){
            setUsers([...users].sort((a,b)=>b.name.length-a.name.length))
            setSortOrder(1);
            return;


        }

    }

    return(
       
        <div className='sortnames'>
            <h1>User List</h1>
            <div>
                <button onClick={getUser}>getUsers</button>
                <button onClick={sortUser}>SortUser</button>
            </div>

            <ul>
               {
                users &&
                users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))
               }
            </ul>


        </div>
    )
}

export default SortNames;