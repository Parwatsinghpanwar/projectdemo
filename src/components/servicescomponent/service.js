import { useState } from 'react';
import './service.css'

function Service(){
    const[count,setcount]=useState(0)
    function increment()
    {
        setcount(count+1)
    }
    function decrement()
    {
        setcount(count-1)
    }
    return(
  <div id= "service">
   <h1> service page called</h1> 
    <spam>count-{count}</spam>
    <button onClick={increment}>+</button>
    <br/>
    <button onClick={decrement}>-</button>
  </div>  
 
    );
}
export default Service;