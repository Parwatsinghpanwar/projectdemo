import './test.css'
import { useState } from 'react';
function Test(props){
  const[marks,setmarks]=useState([67,65,90])
  const[emp,setemp]=useState([
    {"emid":1,"name":"ram","city":"indore"}
    ,{"emid":2,"name":"shyam","city":"indore"},
     {"emid":3,"name":"gyan","city":"indore"},
    {"emid":4,"name":"ps","city":"indore"}
  ])
  function demo(){
    alert("demo function called ")
  }
    return(
  <div id= "rg">
   <h1>Test  components </h1>
   <input  type="button" onClick={demo} value="click me"/>
   <br/>
   <h4>marks Detail</h4>
   {
    marks.map((x,y) => (
      <p>{x}</p>
    ))
   }
   <h4>Employee id</h4>
   <table border={1} align='center' bgcolor='blue'> 
    <caption style={{color:"red" , fontStyle:"oblique"}}></caption>
    <tr>
    <th>Employeee id</th>
    <th>Employee Name</th>
    <th>city</th>
    </tr>
    {
      emp.map((key)=>(
        <tr>
          <th>{key.emid}</th>
          <th>{key.name}</th>
          <th>{key.city}</th>
        </tr>
      ))
    }
   </table>
   <button onClick={props.alert} value="click on button"/>
  </div> 
  
 
    );
}
export default Test;