import Empdata from "./employeedata";
import Empdesign from "./employeedegisne";
const App=()=>{
  const ans=Empdata.map((key)=> <Empdesign

nm={key.name}
id={key.id}
ct={key.city}
sal={key.salary} />
);
return(
<>
<h1>welcome</h1>
<table>
  <tr>
    <th>Name</th>
    <th>Id</th>
    <th>City</th>
    <th>Salary</th>
  </tr>
  {ans}
</table>
</>
)
}

export default App;
