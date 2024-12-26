import React from 'react'
import { images } from '../constants';

const WorkFlow = () => {
    return (
        <div>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl 
        text-center mb-10 lg:mb-20 tracking-wide'>
                <span className='bg-gradient-to-r from-pink-500 
                to-pink-800 text-transparent bg-clip-text'>
                    Gallery
                </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-6 p-2 w-full">
                {images?.map((img, index)=>(
                    <a key={index} href={img.img}><img key={index} className="" src={img.img} alt="Gallery img"/></a>
                ))}
                </div>
            </div>
        </div>
    )
}

export default WorkFlow