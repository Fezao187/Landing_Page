import React from 'react'
import { Address, contactUs, followUs } from '../constants';
import { House } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='mt-20 border-t py-10 border-neutral-700'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Location</h3>
                    <ul className='space-y-2'>
                        {Address.map((resource, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-pink-500" 
                                href={resource.href}
                                target='blank'>
                                    {resource.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Follow Us</h3>
                    <ul className='space-y-2'>
                        {followUs.map((resource, index) => (
                            <li key={index}>
                                <a className="flex items-center text-neutral-300 hover:text-pink-500"
                                    href={resource.href}
                                    target='blank'>
                                    {resource.icon}
                                    {resource.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-md font-semibold mb-4'>Contact us</h3>
                    <ul className='space-y-2'>
                        {contactUs.map((resource, index) => (
                            <li key={index}>
                                <a className="flex items-center text-neutral-300 hover:text-pink-500" 
                                href={resource.href}
                                target='blank'>
                                    {resource.icon}
                                    {resource.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;