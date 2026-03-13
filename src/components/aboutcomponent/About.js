import { useState } from "react";
import './about.css'


function About(){
    const[a,seta]=useState(10);
     const[b,setb]=useState(40);

    return(
  <div id= "content">
    <h1>about page called</h1>
    <span>a={a}</span> 
    <br/>
    <span>b={b}</span>
  </div>  
 
    );
}
export default About;