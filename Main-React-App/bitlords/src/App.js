import './App.css';

import Mainpage from './Components/Mainpage';
import Home from'./Components/Home'
import Bike from './Components/Bike'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Bicycle from './Components/Bicycle';
import Car from './Components/Car';
import Carform from './Components/Carform';
import Nev from './Components/Nev';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  
  return (
   <>
   <Router>  
   
   <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/bike' element={<Bike/>}/>
    <Route path='/bicycle' element={<Bicycle/>}/>
    <Route path='/car' element={<Car/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/sign' element={<Signup/>}/>
    <Route path='/carform' element={<Carform/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>



   </Routes>
   </Router>
   
   </>
  );
}

export default App;
