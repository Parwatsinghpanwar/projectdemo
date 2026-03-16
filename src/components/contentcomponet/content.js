import { useState} from "react";
function Content(){
    const[mark,setmark]=useState([78,87,85]);
    return(
        <>
         <h1>marks detail</h1>
         <p>{mark[0]}</p>
         <p>{mark[1]}</p>
         <p>{mark[2]}</p>
         <spam>total marks={mark[0]+mark[1]+mark[2]}</spam>
        
        </>
    );
}
export default Content;