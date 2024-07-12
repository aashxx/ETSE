import Head from 'next/head';
import EquipCard from '@/custom-components/EquipCard';
import { EQUIPMENTS } from '@/utils/constants';
import React from 'react';

const Equipments = () => {
    return (
        <main className='relative overflow-hidden pt-11 md:pt-24 overflow-x-hidden'>
            <Head>
                <title>Instruments | Electrical Testing & Service Engineers</title>
                <meta name="description" content="Explore the various instruments and equipment used by ETSE for relay testing, transformer testing, and other electrical services." />
                <meta name="keywords" content="Omicron 6 phase Relay Test Kit, Sudharsan Current Injection Kit, Extra High Voltage Test Kit, Hioki Power Quality Analyzer, Transformer Oil Filtration Unit, Transformer Winding Resistance Meter, Transformer Turns Ratio Kit, Contact Resistance Measurement Meter, Circuit Breaker Time Interval Tester, Digital Earth Tester, High Voltage Insulation Tester, Thermographic Camera" />
                <meta property="og:title" content="Instruments Used | Electrical Testing and Service Engineers" />
                <meta property="og:description" content="Explore the various instruments and equipment used by ETSE for relay testing, transformer testing, and other electrical services." />
                <meta property="og:image" content="https://www.omicronenergy.com/fileadmin/_processed_/a/0/csm_CMC-356-overview_d80400499a.png" />
                <meta property="og:url" content="https://www.etse.co.in/equipments" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Instruments Used | Electrical Testing and Service Engineers" />
                <meta name="twitter:description" content="Explore the various instruments and equipment used by ETSE for relay testing, transformer testing, and other electrical services." />
                <meta name="twitter:image" content="https://www.omicronenergy.com/fileadmin/_processed_/a/0/csm_CMC-356-overview_d80400499a.png" />
                <link rel="canonical" href="https://www.etse.co.in/equipments" />
            </Head>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h2 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                    Instruments Used
                </h2>
                <div className='flex flex-wrap gap-5 items-center justify-center mt-10'>
                    {EQUIPMENTS.map((equipment, index) => (
                        <EquipCard key={index} img={equipment.img} title={equipment.title} />
                    ))}
                </div>
                <p className='text-lg mb-4 text-center w-full'>
                    There are many more instruments like these used by our company
                </p>
            </section>
        </main>
    );
}

export default Equipments;
