import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                La Bella Beauty transformations
                <span className='bg-gradient-to-r from-pink-500 to-pink-800
                text-transparent bg-clip-text'>
                    {" "}Make-up for all events
                </span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
                We believe beauty is not just how you look but it's 
                how you feel. <br/>Beauty awakens the soul to act.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-pink-500 to-pink-800 py-3 px-4 mx-3 
                rounded-md">
                    Book now
                </a>
            </div>
            <div className="div flex mt-10 justify-center">
                <video autoPlay muted loop className="rounded-lg w-1/2 border border-pink-700 shadow-pink-400 
                mx-2 my-4">
                    <source src={video1} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="rounded-lg w-1/2 border border-pink-700 shadow-pink-400 
                mx-2 my-4">
                    <source src={video2} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection