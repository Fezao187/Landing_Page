import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/code.jpg";
import { checklistItems, images } from '../constants';

const WorkFlow = () => {
    return (
        <div id='work' className='mt-20'>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl 
        text-center mt-6 tracking-wide'>Some of
                <span className='bg-gradient-to-r from-pink-500 
                to-pink-800 text-transparent bg-clip-text'>
                    {' '}our work
                </span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="grid grid-cols-2 lg:grid-cols-6 p-2 w-full">
                {images?.map((img, index)=>(
                    <a key={index} href={img.img}><img key={index} className="" src={img.img} alt="code img"/></a>
                ))}
                </div>
            </div>
        </div>
    )
}

export default WorkFlow