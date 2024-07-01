"use client";

import { LayoutProps } from '@/utils/types';
import React, { useState } from 'react';
import Navbar from './navbar';
import MobileNavbar from './mobile-navbar';
// import Footer from './Footer';

const PageLayout: React.FC<LayoutProps> = ({ children }) => {

    const [openNav, setOpenNav] = useState<boolean>(false);

    return (
        <div>
            <Navbar setOpenNav={setOpenNav} openNav={openNav} />
            <MobileNavbar setOpenNav={setOpenNav} openNav={openNav} />
            <main>
                {children}
            </main>
            {/* <Footer /> */}
        </div>
    )
}

export default PageLayout;