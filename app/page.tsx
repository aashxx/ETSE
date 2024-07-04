import RetroGrid from '@/components/magicui/retro-grid';
import { CUSTOMERS } from '@/utils/constants';
import React from 'react';

const Home = () => {
  return (
    <main>
      <section className='h-screen z-10 absolute w-full top-0'>
        <RetroGrid />
      </section>
      <section className='mt-36 md:mt-48 w-full flex flex-col justify-center items-center md:px-32 px-4'>
        <h2 className='md:text-6xl text-4xl font-extrabold max-w-[900px] text-center z-40'>
          Ensuring Electrical Safety and Reliability with <span className='text-etse-primary'>ETSE.</span>
        </h2>
        <p className='my-6 md:text-xl text-lg text-center z-40'>
          Delivering Excellence in Electrical Testing and Services
        </p>
        <a href='mailto:etse1984@gmail.com' className='bg-etse-primary rounded-md px-12 py-3 z-40 text-xl hover:bg-etse-primary-hover mt-5 text-[white]'>
          Schedule a Consultation
        </a>
        <img className='md:max-w-[900px] rounded-lg mt-10 z-20' src="https://www.sjkelec.co.uk/wp-content/uploads/2023/10/AdobeStock_469246371-1.jpeg" alt="AV" />
        <p className='text-lg my-4 text-center'>
          We are trusted by several brands. You can too!
        </p>
      </section>
      <section className='w-full h-[100px] flex items-center mb-10'>
            <div className='w-full overflow-hidden flex after:content[""] after:dark:from-brand-dark after:from-background after:bg-gradient-to-l after:right-0 after:top-0 after:bottom-0 after:w-20 after:z-10 after:absolute before:content[""] before:dark:from-brand-dark before:from-background before:bg-gradient-to-r before:left-0 before:top-0 before:bottom-0 before:w-20 before:z-10 before:absolute'>
                {
                    
                    [...Array(2)].map((arr, i) => (
                        <div key={i} className='flex flex-nowrap animate-slide'>
                            {
                                CUSTOMERS.map((customer, index) => (
                                    <div key={index} className='relative w-[150px] m-10 shrink-0 flex items-center'>
                                        <img src={`${customer}`} alt={"AV"} className='object-contain max-h-[70px] md:max-h-[100px] w-[150px]' />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    </main>
  )
}

export default Home;
