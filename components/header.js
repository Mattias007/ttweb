"use client"


import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
            <nav className="text-white bg-whit bg-gradient-to-r from-blue-950 from-50% to-indigo-900 min-w-full">
                <div className='max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4'>
                <Link href="/" className="text-xl font-bold hover:text-cyan-100">TT.EE</Link>
                <div className={`${isMenuOpen ? 'text-cyan-200' : ''}  cursor-pointer md:hidden`} onClick={toggleMenu}>
                    Menu
                </div>
                <div className={`${isMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent'>
                    <div className='font-medium flex flex-col p-0.5  md:p-0 mt-4 rounded-lg hover:bg-cyan-600 bg-cyan-950 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:hover:bg-transparent  md:bg-transparent mdbg-gray-900'>
                    <Link href="/" className='block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-100  md:p-0'>Home</Link>
                    </div>
                    <div className='font-medium flex flex-col p-0.5  md:p-0 mt-4 rounded-lg hover:bg-cyan-600  bg-cyan-950 md:flex-row md:space-x-8 md:hover:bg-transparent rtl:space-x-reverse md:mt-0 md:border-0  md:bg-transparent mdbg-gray-900'>
                    <Link href="/pakketid" className='block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-100 md:p-0 '>Pakketid</Link>
                    </div>
                    <div className='font-medium flex flex-col p-0.5  md:p-0 mt-4 rounded-lg hover:bg-cyan-600  bg-cyan-950 md:flex-row md:space-x-8 md:hover:bg-transparent rtl:space-x-reverse md:mt-0 md:border-0  md:bg-transparent mdbg-gray-900'>
                    <Link href="/rikke" className='block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0 md:hover:text-cyan-100 md:p-0 '>Rikke</Link>
                    </div>
                    </ul>
                </div>
                </div>
            
            </nav>
    );
};

export default Header;
