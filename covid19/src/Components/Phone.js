import React,{useState} from "react";



const Phone=()=>{
const[username,setUserName]=useState("")
const[phno,setPhno]=useState("")
const[showdata,setShowData]=useState([])

function showDetails(){
    setShowData([...showdata,{username,phno}])

}
    return(
        <div className="">
           
             <input type='text' placeholder='Enter user name' onChange={(e)=>setUserName(e.target.value)}/><br/>
             <input type='text' placeholder='Enter mobile number' onChange={(e)=>setPhno(e.target.value)}/><br/>

            <button onClick={showDetails}>AddContacts</button>
           <div>
            {
            showdata.map((data,index)=>(
                 <p key={index}>{data.username}     {data.phno}</p>
                
            ))}
            {
                console.log(showdata)
            }
           </div>
            <div>
            {/* {
            showdata &&
            
             showdata.map((data)=>(
               
                <h2>UserName:{data.username} has
                <p>Phone:{data.phno}</p></h2>
               

                
             ))
            
            
        } */}
       
            </div>

        </div>
       

       
    )
}

export default Phone;