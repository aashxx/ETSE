import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-col px-4 py-6 bg-etse-primary text-[white]'>
            <div className='flex flex-col justify-between gap-6 md:flex-row md:mx-32 md:py-10'>
                <article className='flex flex-col items-center gap-4'>
                    <h3 className='text-3xl font-[900]'>
                        ETSE.
                    </h3>
                </article>
                <aside className='flex flex-wrap gap-6 px-10 justify-center my-10 md:my-[unset] md:gap-14'>
                <article className='flex flex-col gap-3'>
                        <h3 className='text-sm'>
                            <Link href="/">
                                Socials
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/" className='flex gap-1 items-center'>
                                    <FaXTwitter /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="/" className='flex gap-1 items-center'>
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="/" className='flex gap-1 items-center'>
                                    <FaLinkedin /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-sm'>
                            <Link href="/">
                                About
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a href="/">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Vision
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Mission
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-sm'>
                            Services
                        </h3>
                        <ul className='text-sm'>
                            <li>Coming Soon!</li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-sm'>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <a className='flex gap-1 items-center' href="mailto:astrapimoney@gmail.com?subject=Meeting%20Request">
                                    <IoMdMail />
                                    etse1984@gmail.com
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+1(778)874-4788">
                                    <IoMdCall />
                                    040 - 27128888
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+919840572975">
                                    <IoMdCall />
                                    +91 9949545959
                                </a>
                            </li>
                        </ul>
                    </article>
                </aside>
            </div>
            <aside className='flex justify-between items-center border-t-2 border-solid border-t-allotrix-std pt-6 md:mx-32'>
                <h4 className='text-md'>
                    All rights reserved &copy; 2024.
                </h4>
                <div className='text-[13px] font-light py-1 px-4 rounded-2xl text-[white] transition-all duration-300 ease-out border border-[white] hover:bg-[white] hover:text-etse-primary'>
                    <Link href='/'>
                        Schedule
                    </Link>
                </div>
            </aside>
        </footer>
    )
}

export default Footer;