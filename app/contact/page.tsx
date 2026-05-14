import React from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { IoMdCall, IoMdMail } from "react-icons/io";
import Head from 'next/head';

const Contact: React.FC = () => {
    return (
        <main className='relative overflow-hidden pt-7 md:pt-24 overflow-x-hidden'>
            <Head>
                <title>Contact Us | Electrical Testing & Service Engineers</title>
                <meta name="description" content="Get in touch with ETSE for relay testing, transformer testing, and other electrical services in Hyderabad. Reach us via email, phone, or LinkedIn." />
                <meta name="keywords" content="contact electrical testing service engineers, relay testing contact, transformer testing contact, electrical services contact, Hyderabad electrical testing contact" />
                <meta property="og:title" content="Contact Us | Electrical Testing and Service Engineers" />
                <meta property="og:description" content="Get in touch with ETSE for relay testing, transformer testing, and other electrical services in Hyderabad. Reach us via email, phone, or LinkedIn." />
                <meta property="og:url" content="https://www.etse.co.in/contact" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Contact Us | Electrical Testing and Service Engineers" />
                <meta name="twitter:description" content="Get in touch with ETSE for relay testing, transformer testing, and other electrical services in Hyderabad. Reach us via email, phone, or LinkedIn." />
                <link rel="canonical" href="https://www.etse.co.in/contact" />
            </Head>
            <section className='flex flex-col items-center py-14 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h2 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                   Reach Out to Us
                </h2>
            </section>
            <section className='w-[90%] mx-auto mt-10 mb-24 flex flex-wrap justify-center'>
                <article className='md:pr-12 md:border-r-2 md:border-etse-primary'>
                    <h3 className='text-2xl font-bold text-etse-primary mb-4'>
                        Primary Contact
                    </h3>
                    <aside className='flex flex-col md:gap-5 gap-4 text-xl px-6 md:px-10 py-12 rounded-md bg-[#f8f8f8] w-[370px] md:w-[370px] border border-etse-primary'>
                        <p className='flex gap-2 items-center'>
                            <IoMdMail />
                            etse1984@gmail.com
                        </p>
                        <p className='flex gap-2 items-center'>
                            <IoMdMail />
                            jvswamy@yahoo.com
                        </p>
                        <p className='flex gap-2 items-center'>
                            <IoMdCall />
                            +91 9949545959
                            <img className='h-[25px]' src={'/india.png'} alt="India" />
                        </p>
                        <a href='https://www.linkedin.com/company/electrical-testing-and-service-engineers' target='_blank' rel='noopener noreferrer' className='flex gap-2 items-center'>
                            <FaLinkedin />
                            LinkedIn
                        </a>
                    </aside>
                </article>
                <article className='md:pl-12 mt-4 md:mt-[unset]'>
                    <h3 className='text-2xl font-bold text-etse-primary mb-4'>
                        Office
                    </h3>
                    <iframe className='rounded-lg border border-etse-primary h-[280px] w-[370px] md:w-[470px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.208259530587!2d78.5861492!3d17.4975692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9dee480d5e89%3A0x6846aea2f4891b68!2sElectrical%20Testing%20and%20Service%20Engineers%20-%20ETSE!5e0!3m2!1sen!2sin!4v1778600134703!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>
        </main>
    )
}

export default Contact;