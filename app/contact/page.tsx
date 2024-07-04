import React from 'react';
import { IoMdCall, IoMdMail } from "react-icons/io";

const Contact: React.FC = () => {
    return (
        <main className='relative overflow-hidden pt-7 md:pt-24 overflow-x-hidden'>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h1 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                   Reach Out to Us
                </h1>
            </section>
            <section className='w-[90%] mx-auto mt-10 mb-24 flex flex-wrap justify-center'>
                <article className='md:pr-12 md:border-r-2 md:border-etse-primary'>
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
                    <iframe className='rounded-lg border border-etse-primary h-[280px] w-[370px] md:w-[470px]' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3805.642979133929!2d78.561465!3d17.476793999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI4JzM2LjUiTiA3OMKwMzMnNDEuMyJF!5e0!3m2!1sen!2sin!4v1720082165531!5m2!1sen!2sin" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
                </article>
            </section>
        </main>
    )
}

export default Contact;