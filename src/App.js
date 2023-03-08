import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { BrowserRouter as Router, 
         Routes, 
         Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
  );
}

export default App;