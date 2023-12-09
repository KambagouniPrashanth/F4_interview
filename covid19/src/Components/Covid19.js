import React, { useState} from "react";

export default function Covid19() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState();
  const[error,setError]=useState("")

//   useEffect(() => {
//     fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
//       .then((response) => response.json())
//       .then((data) => setData(data), console.log(data));
//   }, []);

  // const handleSearch = () => {
  //   if (country.trim() !== "") {
  //     fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
  //       .then((response) => response.json())
  //       .then((data) => setData(data), console.log(data));
  //   }
  // };
   const handleSearch=()=>{
    if(country.trim()!==""){
      fetch(`https://disease.sh/v3/covid-19/countries/${country}`).
      then((response)=>response.json()).then((data)=>setData(data),console.log(data)).
      catch((e)=>setError(e.message),console.log(error.message))
    }
   }
   const render=()=>{
    
      if(data){
        return((
          <div>
          <p>Country Name: {data.country}</p>
          <p>Cases: {data.cases}</p>
          <p>Deaths: {data.deaths}</p>
          <p>Recovered: {data.recovered}</p>

          </div>
        ))
      }
      else if(error){
        return(
          (
           <div>
             <p>{error}</p>
           </div>
          )
         )

      }
      else{
        return(
          <div>
            <p>Loading</p>
          </div>
        )
      }
     
      

    }
      
      
        
         
         
        

      
    
   
  return (
    <div className="App">
      <h1>Covid-19 cases Country wise</h1>
      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>

      {data && render ()}
       
    
    </div>
  );
}
