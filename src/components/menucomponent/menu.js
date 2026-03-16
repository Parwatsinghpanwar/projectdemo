import './menu.css';
import{Link} from "react-router-dom"
function menu(){
    return(
        <div id="menu">
            <Link to="/"> home</Link>
            <Link to="/About">about</Link>
            <Link to="/Service">service</Link>
           
            <Link to="/login">Login</Link>
            <Link to="/registor">registor</Link>
            <Link to="/test">test</Link>
            </div>
            
    );
}
export default menu;