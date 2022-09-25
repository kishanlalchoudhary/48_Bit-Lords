import logo from './logo.svg';
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

function App() {
  
  return (
   <>
   <Router>   
   <Routes>
    <Route path='/mainpage' element={<Mainpage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/bike' element={<Bike/>}/>
    <Route path='/log' element={<Login/>}/>
    <Route path='/sign' element={<Signup/>}/>



   </Routes>
   </Router>
   </>
  );
}

export default App;
