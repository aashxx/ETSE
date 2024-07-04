import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { NavbarProps } from '@/utils/types';
import '../app/globals.css';

const Navbar: React.FC<NavbarProps> = ({openNav, setOpenNav}) => {
    return (
        <nav className={`flex flex-col border-b border-[#616161] items-center justify-center gap-16 fixed z-50 md:absolute ${openNav ? 'right-0': '-right-[150%] md:right-0 md:left-0'} top-0 h-[100vh] w-full bg-[#ffffff] text-allotrix-text font-bold tracking-wide transition-all duration-500 ease-in-out md:flex-row md:justify-between md:p-4 md:h-[unset] md:top-0 md:gap-0 z-50 md:px-10`}>
            <div className='md:hidden'>
                <button className='text-4xl text-etse-secondary absolute top-6 right-4' onClick={() => setOpenNav(!openNav)}>
                    <IoCloseSharp />
                </button>
            </div>
            <div className='w-[120px]'>
                <Link href={'/'} onClick={() => setOpenNav(!openNav)}>
                    <h2 className='font-extrabold text-4xl text-etse-primary'>
                        ETSE.
                    </h2>
                </Link>
            </div>
            <ul className='flex flex-col font-normal text-xl text-etse-secondary items-center gap-4 px-6 py-4 rounded-xl md:flex-row md:gap-10 md:py-3 md:px-8 md:h-[55px]'>
                <li className='hover:text-etse-primary'>
                    <Link href="/" onClick={() => setOpenNav(!openNav)}>Home</Link>
                </li>
                <li className='hover:text-etse-primary'>
                    <Link href="/" onClick={() => setOpenNav(!openNav)}>About</Link>
                </li>
                <li className='hover:text-etse-primary'>
                    <Link href="/services" onClick={() => setOpenNav(!openNav)}>Services</Link>
                </li>
                <li className='hover:text-etse-primary'>
                    <Link href="/contact" onClick={() => setOpenNav(!openNav)}>Contact</Link>
                </li>
            </ul>
            <a href='mailto:' className='transition-all delay-75 font-normal ease-out text-lg rounded-md py-[5px] px-12 bg-etse-primary text-[white]'>
                Email
            </a>
        </nav>
    )
}

export default Navbar;