import EquipCard from '@/custom-components/EquipCard';
import { EQUIPMENTS } from '@/utils/constants';
import React from 'react';

const Equipments = () => {
    return (
        <main className='relative overflow-hidden pt-11 md:pt-24 overflow-x-hidden'>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h1 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                    Instruments Used
                </h1>
                <div className='flex flex-wrap gap-5 items-center justify-center my-10'>
                    {
                        EQUIPMENTS.map((equipment, index) => (
                            <EquipCard key={index} img={equipment.img} title={equipment.title} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Equipments;
