"use client";

import Card from '@/components/magicui/card';
import RetroGrid from '@/components/magicui/retro-grid';
import EquipCard from '@/custom-components/EquipCard';
import { CUSTOMERS, EQUIPMENTS, SERVICES } from '@/utils/constants';
import { EquipCardProps } from '@/utils/types';
import Link from 'next/link';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {

  const groupEquipments = (equipments: EquipCardProps[]) => {
    let groupedEquipments = [];
    for (let i = 0; i < equipments.length; i += 2) {
      groupedEquipments.push(equipments.slice(i, i + 2));
    }
    return groupedEquipments;
  };

  const groupedEquipments = groupEquipments(EQUIPMENTS);

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
        <Link href='/services' className='bg-etse-primary rounded-md px-12 py-3 z-40 text-xl hover:bg-etse-primary-hover mt-5 text-[white]'>
          Schedule a Consultation
        </Link>
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
      <section className='my-10'>
        <h2 className='text-4xl font-bold text-etse-primary text-center'>
          What we offer?
        </h2>
        <div className='flex flex-wrap gap-5 items-center justify-center my-10'>
          {
            SERVICES.slice(0, 3).map((service, index) => (
              <Card key={index} img={service.img} title={service.title} description={service.description} />
            ))
          }
        </div>
        <p className='text-lg text-center my-4'>
          Explore more of <Link className='text-etse-primary hover:underline' href={'/services'}>Our Services</Link>
        </p>
      </section>
      <section className='my-10 relative w-full'>
        <aside style={{ background: "url('https://img.freepik.com/premium-photo/electrical-engineer-using-measuring-equipment_101448-1422.jpg?w=826') no-repeat center center/cover" }} className='absolute top-0 w-full h-full filter brightness-50 z-10' />
        <div className='py-32 flex flex-col items-center justify-center px-4 relative z-20 h-full text-[white]'>
          <h2 className='text-2xl font-semibold'>
            Meet Us Better
          </h2>
          <h3 className='text-4xl my-4 font-[900] text-center'>
            Our Service Reviews in Numbers
          </h3>
          <div className='mt-10 flex flex-wrap text-white gap-14 md:gap-32 w-full justify-center'>
            <article className='text-center max-w-[100px]'>
              <strong className='text-5xl'>
                50+
              </strong>
              <p>
                companies collaborated
              </p>
            </article>
            <article className='text-center max-w-[100px]'>
              <strong className='text-5xl'>
                20+
              </strong>
              <p>
                experts working
              </p>
            </article>
            <article className='text-center max-w-[100px]'>
              <strong className='text-5xl'>
                10+
              </strong>
              <p>
                equipments owned
              </p>
            </article>
            <article className='text-center max-w-[100px]'>
              <strong className='text-5xl'>
                100%
              </strong>
              <p>
                satisfied customers
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className='my-10'>
        <h2 className='text-4xl font-bold text-etse-primary text-center'>
          What we use?
        </h2>
        <div className='mt-10 mx-auto'>
          <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false} showStatus={false}>
            {
              groupedEquipments.map((group, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 justify-center items-center h-auto">
                  {
                    group.map((equipment, idx) => (
                      <EquipCard
                        key={idx}
                        img={equipment.img}
                        title={equipment.title}
                      />
                    ))
                  }
                </div>
              ))
            }
          </Carousel>
        </div>
        <p className='text-lg text-center my-4'>
          Explore more of <Link className='text-etse-primary hover:underline' href={'/equipments'}>Our Equipments</Link>
        </p>
      </section>
    </main>
  )
}

export default Home;
