import React from 'react';
import { IoMdCall, IoMdMail } from "react-icons/io";

const Contact: React.FC = () => {
    return (
        <main className='relative overflow-hidden pt-7 md:pt-24 overflow-x-hidden'>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h1 className='md:text-5xl text-4xl text-center w-full px-4'>
                    Got Queries? <span className='text-etse-primary text-4xl md:text-5xl py-1 border-b-2 border-etse-primary'>Reach out</span> to us
                </h1>
            </section>
            <section className='w-[90%] mx-auto mt-10 mb-24 flex flex-wrap justify-center'>
                <article className='md:pr-12 md:border-r-2 md:border-[#252526]'>
                    <h3 className='text-2xl font-bold text-etse-primary mb-4'>
                        Primary Contact
                    </h3>
                    <aside className='flex flex-col md:gap-10 gap-8 text-xl px-6 md:px-10 py-12 rounded-md bg-[#f8f8f8] w-[370px] md:w-[370px] border border-etse-primary'>
                        <p className='flex gap-2 items-center'>
                            <IoMdMail />
                            etse1984@gmail.com
                        </p>
                        <p className='flex gap-2 items-center'>
                            <IoMdCall />
                            040 - 27128888
                            <img className='ml-2' src={'/india.png'} alt="India" />

                        </p>
                        <p className='flex gap-2 items-center'>
                            <IoMdCall />
                            +91 9949545959
                            <img src={'/india.png'} alt="India" />
                        </p>
                    </aside>
                </article>
                <article className='md:pl-12 mt-4 md:mt-[unset]'>
                    <h3 className='text-2xl font-bold text-etse-primary mb-4'>
                        Office
                    </h3>
                    <iframe className='rounded-lg border border-etse-primary h-[280px] w-[370px] md:w-[470px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60886.86528362397!2d78.50022335716488!3d17.487019192314516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c85910661b1%3A0xd2c164ea7a29168f!2sKapra%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1720073905827!5m2!1sen!2sin" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>
        </main>
    )
}

export default Contact;