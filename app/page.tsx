import RetroGrid from '@/components/magicui/retro-grid';
import React from 'react';

const Home = () => {
  return (
    <main>
      <RetroGrid />
      <section className='md:h-screen mt-24 md:mt-[unset] w-full flex flex-col justify-center items-center md:px-32 px-4'>
        <h2 className='md:text-6xl text-4xl font-extrabold max-w-[900px] text-center'>
          Ensuring Electrical Safety and Reliability with <span className='text-etse-primary'>ETSE.</span>
        </h2>
        <p className='my-6 md:text-xl text-lg text-center'>
          Delivering Excellence in Electrical Testing and Services
        </p>
        <a href='mailto:etse1984@gmail.com' className='bg-etse-primary rounded-md px-12 py-3 z-40 text-xl hover:bg-etse-primary-hover mt-8 text-[white]'>
          Schedule a Consultation
        </a>
      </section>
    </main>
  )
}

export default Home;
