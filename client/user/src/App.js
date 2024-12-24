import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Booking from './views/Booking';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './views/Home';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/book/now' element={<Booking />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
};

export default App;