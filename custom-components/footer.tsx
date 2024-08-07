import React from 'react';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from "react-icons/io";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-col px-4 py-6 bg-etse-primary text-[white]'>
            <div className='flex flex-col justify-between gap-6 md:flex-row md:mx-32 md:py-10'>
                <article className='flex flex-col items-center gap-4 w-[200px]'>
                    <h3 className='text-2xl font-semibold'>
                        Electrical Testing and Service Engineers
                    </h3>
                </article>
                <aside className='flex flex-wrap gap-6 px-10 justify-center my-10 md:my-[unset] md:gap-14'>
                    {/* <article className='flex flex-col gap-3'>
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
                    </article> */}
                    <article className='flex flex-col gap-3'>
                        <h3 className='text-sm'>
                            <Link href="/about">
                                About
                            </Link>
                        </h3>
                        <ul className='text-sm'>
                            <li>
                                <Link href="/about">
                                    Company
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    Authorization
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    Customers
                                </Link>
                            </li>
                        </ul>
                    </article>
                    <article className='flex flex-col gap-3'>
                        <Link href={'/services'} className='text-sm'>
                            Services
                        </Link>
                        <ul className='text-sm'>
                            <li>
                                <Link href="/services">
                                    Testing & Calibration
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Transformers
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Maintenance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services">
                                    Approvals
                                </Link>
                            </li>
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
                                    <IoMdMail />
                                    jvswamy@yahoo.com
                                </a>
                            </li>
                            <li>
                                <a className='flex gap-1 items-center' href="tel:+919840572975">
                                    <IoMdCall />
                                    +91 9949545959
                                </a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/company/electrical-testing-and-service-engineers' target='blank' className='flex gap-2 items-center'>
                                    <FaLinkedin />
                                    LinkedIn
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
                    <Link href='/contact'>
                        Book
                    </Link>
                </div>
            </aside>
        </footer>
    )
}

export default Footer;