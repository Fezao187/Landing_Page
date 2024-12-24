import React from 'react'
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import WorkFlow from '../components/WorkFlow';

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeatureSection />
            <WorkFlow />
            <Pricing />
            <Testimonials />
        </>
    )
}

export default Home