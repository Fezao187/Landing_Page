import React from 'react'

const About = () => {
  return (
    <div>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl
      text-center tracking-wide mb-10 lg:mb-20'>About
      <span className='bg-gradient-to-tr from-pink-500 
      to-pink-800 text-transparent bg-clip-text'>
        {' '}us</span></h2>
        <p className='text-lg text-center text-neutral-500 max-w-4xl mx-auto'>
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industry's 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
  )
}

export default About