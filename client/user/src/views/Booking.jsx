import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const tempId = process.env.REACT_APP_TEMP_ID;
    const public_key = process.env.REACT_APP_PUBLIC_KEY;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [service, setService] = useState('');

    const form = useRef();
    let navigate = useNavigate();
    const sendEnail = async (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceId, tempId, form.current, {
                publicKey: public_key,
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
                        <label className='ml-1' htmlFor='name'>Surname:</label><br />
                        <input className='w-full h-10 mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double' type='text' id='surname' name='surname' value={surname}
                            onChange={(e) => setSurname(e.target.value)} required />
                    </div>
                    <div className="form-group mb-4">
                        <label className='ml-1' htmlFor='email'>Email:</label><br />
                        <input className='w-full h-10 mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double' type='email' id='email' name='email' value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group mb-4">
                        <label className='ml-1' htmlFor='subject'>Phone:</label><br />
                        <input className='w-full h-10 mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double'
                            type='number' id='phone' name='phone' value={phone}
                            onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="form-group mb-4 pb-10 border-b border-neutral-800">
                        <label className='ml-1' htmlFor='service'>Select an option:</label><br />
                        {/* <textarea className='w-full mt-2 appearance-none bg-transparent 
                        border border-neutral-900 border-b-pink-500 focus:outline-double' id='service' name='service' rows='4' value={service}
                            onChange={(e) => setService(e.target.value)} required></textarea> */}
                            <select id='service' name="service" className='bg-black border-0 border-b border-pink-500 appearance-none
                            focus:outline-none focus:ring-0 peer
                            text-sm focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5'>
                                <option selected>Choose a service</option>
                                <option value='softLook'>Soft look: R300</option>
                                <option value='naturalGlam'>Natural Glam: R350</option>
                                <option value='softGlam'>Soft Glam: R400</option>
                                <option value='fullGlam'>Full Glam: R450</option>
                                <option value='bridalGlam'>Bridal Glam: R550</option>
                                <option value='motherOfBride'>Mother of Bride/Groom: R400</option>
                                <option value='bridesmaides'>Bridesmaids: R450</option>
                                <option value='flowerGirl'>Flower Girl: R200</option>
                                <option value='groom'>Groom: R250</option>
                                <option value='stripEylashes'>Strip eyelashes: R30</option>
                                <option value='shapingAndTrim'>Shaping and trimming: R110</option>
                                <option value='wigInstall'>Wig installation: R200</option>
                                <option value='facialCleanse'>Facial Cleansing: R120</option>
                                <option value='eyebrowMap'>Eyebrow mapping and tint: R220</option>
                                <option value='eyelashTint'>Eyelash tint: R?</option>
                            </select>
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