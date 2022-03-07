import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import Recepten from './components/recepten/Recepten';
import Home from './components/home/Home';
import About from './components/about/About';

// import app styles
import './App.css';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recepten' element={<Recepten />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
