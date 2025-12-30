import React, { useState } from 'react';
import logo from '../assets/atom.png';
import { ArrowBigDownDash, Menu, X } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import '../index.css';
import Resume from '../../public/Eyad-Resume.pdf';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Contact', id: 'contact' }
    ];

    const linkProps = {
        smooth: true,
        duration: 600,
        offset: -80,
        spy: true,
        onClick: () => setIsOpen(false)
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-slate-950/20 backdrop-blur-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                    {/* Logo */}
                    <ScrollLink
                        to="hero"
                        {...linkProps}
                        className="flex items-center space-x-1 cursor-pointer"
                    >
                        <img src={logo} alt="Logo" className="w-6 h-6 sm:w-8 sm:h-8" />
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-white">Port</span>
              <span className="text-blue-400">Folio</span>
            </span>
                    </ScrollLink>

                    {/* Desktop */}
                    <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
                        {navLinks.map(link => (
                            <ScrollLink
                                key={link.id}
                                to={link.id}
                                {...linkProps}
                                className="text-gray-300 hover:text-white text-sm lg:text-base font-medium cursor-pointer"
                                activeClass="text-blue-400"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}

                        <a
                            href={Resume}
                            download
                            className="flex items-center px-4 py-2 text-sm lg:text-base font-medium
                         text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                        >
                            Resume
                            <ArrowBigDownDash className="w-4 h-4 ml-2" />
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed top-14 right-0 w-full h-full bg-slate-950 border-t border-slate-800 md:hidden animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col items-center py-4 bg-slate-900/95 backdrop-blur-lg">
                        {navLinks.map(link => (
                            <ScrollLink
                                key={link.id}
                                to={link.id}
                                {...linkProps}
                                className="px-4 py-4 text-gray-300 hover:text-white cursor-pointer"
                                activeClass="text-blue-400"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
