import logo from './logo.svg';
import './App.css';
import Home from './router/Home';
import About from './router/About';
import Service from './router/Service';
import Contact from './router/Contact';
import { Route, Routes } from 'react-router-dom';
import NavBar from './router/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        
      </Routes>
      <NavBar/>
    </div>
  )
}
export default App;