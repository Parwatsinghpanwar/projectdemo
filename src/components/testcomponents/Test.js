import './test.css'
import { useState } from 'react';
function Test(){
  const[marks,setmarks]=useState([67,65,90])
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
  </div> 
  
 
    );
}
export default Test;