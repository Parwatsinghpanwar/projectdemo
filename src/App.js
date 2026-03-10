import logo from './logo.svg';
import './App.css';
import Header from './components/headercomponent/Header';
import Menu from './components/menucomponent/menu'; 
import Content from './components/contentcomponet/content';
import Footer from './components/footercomponent/footer';

function App() {
  return (
    <div id="maindiv">
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
