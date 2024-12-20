import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
    return (
        <div id='test' className='mt-10 tracking-wide'>
            <h2 className='text-3xl sm:text-txl lg:text-6xl text-center my-10 lg:my-20'>
                What people are saying
            </h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                        <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 
                    font-thin'>
                            <div className='flex mb-8 items-start'>
                                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                                    src={testimonial.image} alt={testimonial.user} />
                                <h6 className='my-auto'>{testimonial.user}</h6>
                            </div>
                            <p>{testimonial.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials