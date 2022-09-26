import './App.css';
import Navbar from './Components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart';
import Home from './Components/Home';


function App() {
  return (
   <>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/Cart" element={<Cart/>} />
   </Routes>
   </>
  );
}

export default App;
