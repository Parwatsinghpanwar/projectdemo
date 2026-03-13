import logo from './logo.svg';
import './App.css';
import Header from './components/headercomponent/Header';
import Menu from './components/menucomponent/menu'; 
import Content from './components/contentcomponet/content';
import Footer from './components/footercomponent/footer';
import Home from './components/homecomponent/home';
import About from './components/aboutcomponent/About';
import Service from './components/servicescomponent/service';
import { Routes ,Route } from 'react-router-dom';
import Login from './components/logincomponent/login';
import Registor from './components/Registorcomponent/resgistor';

function App() {
  return (
    <div id="maindiv">
      <Header/>
      <Menu/>
      <div id ="content">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/service' element={<Service/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registor' element={<Registor/>}></Route>
        </Routes>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
