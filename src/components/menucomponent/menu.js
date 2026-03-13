import './menu.css';
import{Link} from "react-router-dom"
function menu(){
    return(
        <div id="menu">
            <Link to="/"> home</Link>
            <Link to="/About">about</Link>
            <Link to="/service">service</Link>
            <Link to="/login">Login</Link>
            r<Link to="/registor">registor</Link>
            </div>
            
    );
}
export default menu;