import React from 'react';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';
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
        </Routes>
      </Router>
  );
}

export default App;