import logo from "../assets/logo.JPG";
import React, { useState } from 'react'
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex  justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <a href="/"><img className="h-7 mr-2" src={logo} alt="logo" /></a>
                         <a href="/"><span className="text-xl tracking-tight">LA BELLA</span></a> 
                    </div>
                    <ul className="hidden lg:flex ml-0 space-x-12">
                        {navItems?.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="/book/now" className="bg-gradient-to-r from-pink-500 to-pink-800
                    py-2 px-3 rounded-md">
                            Book now
                        </a>
                    </div>
                    <div className="lg:hidden nd:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 
                flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="/book/now" className="py-2 px-3 rounded-md bg-gradient-to-r from-pink-500 to-pink-800">
                                Book now
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar