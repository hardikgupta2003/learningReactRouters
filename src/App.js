import { NavLink, Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home' ;
import About from './components/About' ;
import Labs from './components/Labs' ;
import Support from './components/Support' ;






function App() {
  return (
    <div className="App">
      
      <ul>
       <NavLink to={"/"}> <li> home</li></NavLink>
        <NavLink to={"/about"}><li>about</li></NavLink>
        <NavLink to={"/support"}><li>support</li></NavLink>
        <NavLink to={"/labs"}><li>labs</li></NavLink>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/labs" element={<Labs/>} />
      </Routes>
    </div>
  );
}

export default App;
