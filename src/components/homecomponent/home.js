import './home.css'

function Home(){
    var a=12,b=5,c;
    c=a+b
    return(
  <div id= "home">
    <h1>this is a homepage of website</h1>
    <p>sum={c}</p>
    <p>sum={a-b}</p>
    <p>sum={a*b}</p>
    <p>sum={a/b}</p>
    <p>sum={a%b}</p>
  </div>  
 
    );
}
export default Home;