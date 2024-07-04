import React from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { NavbarProps } from '@/utils/types';

const MobileNavbar: React.FC<NavbarProps> = ({ openNav, setOpenNav }) => {
    return (
        <nav className='flex items-center justify-between p-4 md:hidden w-full backdrop-blur-2xl absolute top-0 z-20'>
            <div className='w-[150px] '>
                <h2 className='font-extrabold text-4xl text-etse-primary'>
                    ETSE.
                </h2>
            </div>
            <div>
                <button className='text-4xl text-astrapi-text' onClick={() => setOpenNav(!openNav)}>
                    <AiOutlineBars />
                </button>
            </div>
        </nav>
    )
}

export default MobileNavbar;
