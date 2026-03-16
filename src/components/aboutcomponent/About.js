import { useState } from "react";
import './about.css'


function About(){
    const[a,seta]=useState(10);
     const[b,setb]=useState(40);
     const[mark,setmark]=useState([78,87,85]);

    return(
  <div id= "content">
    <h1>about page called</h1>
    <span>a={a}</span> 
    <br/>
    <span>b={b}</span>
    <br/>
     <h1>marks detail</h1>
         <p>{mark[0]}</p>
         <p>{mark[1]}</p>
         <p>{mark[2]}</p>
         <spam>total marks={mark[0]+mark[1]+mark[2]}</spam>
  </div>  
 
    );
}
export default About;