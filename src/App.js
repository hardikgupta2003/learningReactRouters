import { Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home' ;
import About from './components/About' ;
import Labs from './components/Labs' ;
import Support from './components/Support' ;
import { Link } from 'react-router-dom';





function App() {
  return (
    <div className="App">
      
      <ul>
       <Link to={"/"}> <li> home</li></Link>
        <Link to={"/about"}><li>about</li></Link>
        <Link to={"/support"}><li>support</li></Link>
        <Link to={"/labs"}><li>labs</li></Link>
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
