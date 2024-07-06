import { CUSTOMERS } from '@/utils/constants';
import React from 'react';

const About = () => {
    return (
        <main className='relative overflow-hidden pt-11 md:pt-24 overflow-x-hidden text-etse-secondary px-6'>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h1 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                    About Us
                </h1>
                <p className='text-lg max-w-[900px] mx-auto my-8'>
                    Our company started in 1984 exclusively as a Service Oriented Technocrat Organization for testing and commissioning of Electrical Installations and now it&apos;s becoming a solution provider for many industries.
                </p>
                <div className='flex flex-col-reverse md:flex-row justify-between max-w-[900px] mx-auto gap-10 md:gap-32'>
                    <aside>
                        <h2 className='text-3xl text-etse-primary mb-6 font-bold'>
                            Our Founder
                        </h2>
                        <p className='text-lg text-justify'>
                            Late <strong className='font-bold'>Shri J. VENKATASWAMY,</strong> the founder and the brain behind the company&apos;s establishment, growth and success. His consistent developments over 39years made ELECTRICAL TESTING AND SERVICE ENGINEERS one of the leading solution provider in power sectors. His hard efforts has been paid off and the company now celebrating 39 years of excellency. 
                        </p>
                    </aside>
                    <img className='h-[340px] rounded-md' src="https://i.postimg.cc/MGBYBZkH/founder.jpg" alt="Founder" />
                </div>
                <p className='text-lg max-w-[900px] mx-auto my-8 text-justify'>
                    We are happy to introduce ourselves that we are one of the Leading and Authorized agencies with more than 40 Years of service in the field of testing and calibration of protective relays Testing and Commissioning of Electrical Installations, preventive maintenance of Transformer, Switchgears, Power system Analysis, Field Engineering services, filtration of oil in transformers up to 220KV S/S
                </p>
                <div className='md:max-w-[900px] w-full mx-auto mb-7 flex flex-col gap-8'>
                    <h2 className='text-3xl text-etse-primary font-bold text-center'>
                        Our Authorizations
                    </h2>
                    <p className='text-justify text-lg'>
                        We are authorised by the Chief Electrical Inspector to <strong>Government of ANDHRA PRADESH</strong> vide Authorisation No. <strong>DES&CEIG/Tech/OTK&PRK/D.No.109/2021</strong> dated 18.05.2021, Validity upto 18.05.2024.
                    </p>
                    <p className='text-justify text-lg'>
                        We are authorised by the Chief Electrical Inspector to <strong>Government of TELANGANA</strong> vide Authorisation No. <strong>CEIG/TS/OTK/PRT/No.09/D.No.1899/2023</strong> Dated 17.08.2023, Validity upto 17.08.2026.
                    </p>
                </div>
                <div className='max-w-[900px] mx-auto'>
                    <h2 className='text-3xl text-etse-primary font-bold text-center mb-14'>
                        Our Top Customers
                    </h2>
                    <article className='flex flex-wrap gap-14 items-center justify-center'>
                        {
                            CUSTOMERS.map((customer, index) => (
                                <img key={index} className='w-[150px] h-[100px]' src={customer} alt="AV" />
                            ))
                        }
                    </article>
                </div>
            </section>
        </main>
    )
}

export default About;
