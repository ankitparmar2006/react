import { useState,useEffect } from "react";
import axios from "axios";
const Display = () => {
  const [mydata,setMydata]=useState([]);

  const loadAData=async()=>{
    let api="http://localhost:3000/student";
    const response=await axios.get(api);
    console.log(response);
    setMydata(response.data);
  }
  useEffect(()=>{
    loadAData();
  },[]);

  const ans=mydata.map((key)=>{
    return(
      <>
      <tr>
        <td>{key.empno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
      
      </>
    )
  })
  return (
    <>
      <table>
        <tr>
        <th>empno</th>
        <th>name</th>
        <th>degignation</th>
        <th>fees</th>
        </tr>
      </table>
      {ans}

      
    </>
  )
}

export default Display;
