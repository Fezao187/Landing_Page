import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Booking from './views/Booking';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';
import Gallery from './views/Gallery';
import Testimonials from './views/Testimonials';
import About from './views/About';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book/now' element={<Booking />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;