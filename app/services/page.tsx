import Head from 'next/head';
import Card from '@/components/magicui/card';
import { SERVICES } from '@/utils/constants';
import React from 'react';

const Services = () => {
    return (
        <main className='relative overflow-hidden pt-11 md:pt-24 overflow-x-hidden'>
            <Head>
                <title>Services | Electrical Testing & Service Engineers</title>
                <meta name="description" content="Explore the wide range of services offered by ETSE, including relay testing, transformer testing, energy meter calibration, and more in Hyderabad." />
                <meta name="keywords" content="relay testing, transformer testing, energy meter calibration, commissioning of power transformers, circuit breaker servicing, power system studies, substation maintenance, annual maintenance contract, electrical statutory approvals" />
                <meta property="og:title" content="Our Services | Electrical Testing and Service Engineers" />
                <meta property="og:description" content="Explore the wide range of services offered by ETSE, including relay testing, transformer testing, energy meter calibration, and more in Hyderabad." />
                <meta property="og:image" content="https://www.elecsupport.com/files/cache/fca3dcef6b77a67171117a5cae9efc8a_f438.jpg" />
                <meta property="og:url" content="https://www.etse.co.in/services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | Electrical Testing and Service Engineers" />
                <meta name="twitter:description" content="Explore the wide range of services offered by ETSE, including relay testing, transformer testing, energy meter calibration, and more in Hyderabad." />
                <meta name="twitter:image" content="https://www.elecsupport.com/files/cache/fca3dcef6b77a67171117a5cae9efc8a_f438.jpg" />
                <link rel="canonical" href="https://www.etse.co.in/services" />
            </Head>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h2 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                    Our Services
                </h2>
                <div className='flex flex-wrap gap-5 items-center justify-center my-10'>
                    {SERVICES.map((service, index) => (
                        <Card key={index} img={service.img} title={service.title} description={service.description} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Services;
