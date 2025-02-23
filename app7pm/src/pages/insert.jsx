import { useState } from "react";
import axios from "axios";
const Insert=()=>{

    
      const [input,setInput]=useState({})
      const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
    
        setInput(values=>({...values,[name]:value}));
        console.log(input);
      }
    
    
    
    
      const handleSubmit=async()=>{
        let api="http://localhost:3000/student"
        axios.post(api,input).then((res)=>{
          alert("data is saved")
        })
              }


    return(
        <>
        <h1> Inset Data</h1>
     

        Enter empno <input type="text" name="empno"  
   onChange={handleInput}/>
   <br />


   Enter degignation <input type="text" name="degignation"  
   onChange={handleInput}/>
   <br />



   Enter city <input type="text" name="city" 
   onChange={handleInput}/>  <br />


   Enter fees <input type="text" name="fees" onChange={handleInput} />

   <button onClick={handleSubmit}>submit</button>

    
    

        
    </>
    )
    
    }
    export default Insert;
