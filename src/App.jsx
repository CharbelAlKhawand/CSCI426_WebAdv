import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './App/Home';
import About from './App/About';
import Contact from './App/Contact';
import Favorites from './App/Favorites';
import Store from './App/store';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        
      </Routes>
      <Footer/>
    </Router>
  )
}
export default App;