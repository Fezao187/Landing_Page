import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    let navigate = useNavigate();
    const sendEnail = async (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_20ldcx5', 'template_gn4khzh', form.current, {
                publicKey: 'h9GXWE5gyfBwLzZWO',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    navigate("/");
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };
    return (
        <div id='booking' className='flex items-center'>
            <div className='w-full lg:w-1/2 mx-auto border border-neutral-800 rounded-xl'>
                <h2 className='m-2 sm:m-4 lg:m-6 text-2xl sm:text-3xl lg:text-4xl
                text-center mt-10 sm:mt-12 lg:mt-14 tracking-wide'>Book
                    <span className='bg-gradient-to-tr from-pink-500 
                to-pink-800 text-transparent bg-clip-text'>
                        {' '}now
                    </span>
                </h2>
                <form className='m-2 mx-10 lg:m-6 lg:mx-28 mb-10 sm:mb-12 lg:mb-14 text-sm sm:text-md lg:text-lg' onSubmit={sendEnail} ref={form}>
                    <div className="form-group mb-4">
                        <label className='ml-1' htmlFor='name'>Name:</label><br />
                        <input className='w-full h-10 mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double' type='text' id='name' name='name' value={name}
                            onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group mb-4">
                        <label className='ml-1' htmlFor='email'>Email:</label><br />
                        <input className='w-full h-10 mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double' type='email' id='email' name='email' value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group mb-4">
                        <label className='ml-1' htmlFor='subject'>Subject:</label><br />
                        <input className='w-full h-10 mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double'
                            type='text' id='subject' name='subject' value={subject}
                            onChange={(e) => setSubject(e.target.value)} required />
                    </div>
                    <div className="form-group mb-4">
                        <label className='ml-1' htmlFor='message'>Message:</label><br />
                        <textarea className='w-full mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double' id='message' name='message' rows='4' value={message}
                            onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <div className='w-full flex'>
                        <button className='mt-2 sm:mt-3 lg:mt-4 w-28 mx-auto bg-gradient-to-r from-pink-500 to-pink-800
                    py-2 px-3 rounded-md' type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Booking