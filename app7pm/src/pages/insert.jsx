
import { useState } from "react";

const Insert=()=>{

    
      const [input,setInput]=useState({})
      const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
    
        setInput(values=>({...values,[name]:value}));
        console.log(input);
      }
    
    
    
    
      const handleSubmit=()=>{
        console.log(input)
      }


    return(
        <>
        <h1> Inset Data</h1>
     

        Enter rollno <input type="text" name="rollno"  
   onChange={handleInput}/>
   <br />


   Enter name <input type="text" name="name"  
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