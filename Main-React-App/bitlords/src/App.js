import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import Home from'./Components/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>   
   <Routes>
    <Route path='/mainpage' element={<Mainpage/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
   </Router>
   </>
  );
}

export default App;
