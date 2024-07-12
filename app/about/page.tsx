import { CUSTOMERS } from '@/utils/constants';
import React from 'react';
import Head from 'next/head';

const About = () => {
    return (
        <main className='relative overflow-hidden pt-11 md:pt-24 overflow-x-hidden text-etse-secondary px-6'>
            <Head>
                <title>About | Electrical Testing & Service Engineers</title>
                <meta name="description" content="Learn about Electrical Testing and Service Engineers, a provider of relay testing, transformer testing and energy meter calibration services in Hyderabad." />
                <meta name="keywords" content="relay testing in Hyderabad, transformer testing in Hyderabad, energy meter calibration in Hyderabad, relay testing, transformer testing, energy meter calibration" />
                <meta property="og:title" content="About Us | Electrical Testing and Service Engineers" />
                <meta property="og:description" content="Learn about Electrical Testing and Service Engineers, a provider of relay testing, transformer testing and energy meter calibration services in Hyderabad." />
                <meta property="og:image" content="https://i.postimg.cc/MGBYBZkH/founder.jpg" />
                <meta property="og:url" content="https://www.etse.co.in/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="About Us | Electrical Testing and Service Engineers" />
                <meta name="twitter:description" content="Learn about Electrical Testing and Service Engineers, a provider of relay testing, transformer testing and energy meter calibration services in Hyderabad." />
                <meta name="twitter:image" content="https://i.postimg.cc/MGBYBZkH/founder.jpg" />
                <link rel="canonical" href="https://www.etse.co.in/about" />
            </Head>
            <section className='flex flex-col items-center py-10 mt-6 md:mt-0 text-center gap-10 md:items-start md:text-left md:px-32 md:gap-4'>
                <h2 className='md:text-5xl text-4xl text-center w-full px-4 text-etse-primary'>
                    About Us
                </h2>
                <p className='text-lg max-w-[900px] mx-auto my-8'>
                    Our company started in 1984 exclusively as a Service Oriented Technocrat Organization for testing and commissioning of Electrical Installations and now it&apos;s becoming a solution provider for many industries.
                </p>
                <div className='flex flex-col-reverse md:flex-row justify-between max-w-[900px] mx-auto gap-10 md:gap-32'>
                    <aside>
                        <h2 className='text-3xl text-etse-primary mb-6 font-bold'>
                            Our Founder
                        </h2>
                        <p className='text-lg text-justify'>
                            Late <strong className='font-bold'>Shri J. VENKATASWAMY,</strong> the founder and the brain behind the company&apos;s establishment, growth and success. His consistent developments over 39 years made ELECTRICAL TESTING AND SERVICE ENGINEERS one of the leading solution providers in power sectors. His hard efforts have been paid off and the company is now celebrating 39 years of excellence.
                        </p>
                    </aside>
                    <img className='h-[340px] rounded-md' src="https://i.postimg.cc/MGBYBZkH/founder.jpg" alt="Founder" />
                </div>
                <p className='text-lg max-w-[900px] mx-auto my-8 text-justify'>
                    We are happy to introduce ourselves as one of the Leading and Authorized agencies with more than 40 Years of service in the field of testing and calibration of protective relays, Testing and Commissioning of Electrical Installations, preventive maintenance of Transformers, Switchgears, Power system Analysis, Field Engineering services, filtration of oil in transformers up to 220KV S/S.
                </p>
                <div className='md:max-w-[900px] w-full mx-auto mb-7 flex flex-col gap-8'>
                    <h2 className='text-3xl text-etse-primary font-bold text-center'>
                        Our Authorizations
                    </h2>
                    <p className='text-justify text-lg'>
                        We are authorised by the Chief Electrical Inspector to <strong>Government of ANDHRA PRADESH</strong> vide Authorisation No. <strong>DES&CEIG/Tech/OTK&PRK/D.No.109/2021</strong> dated 18.05.2021, Validity up to 18.05.2024.
                    </p>
                    <p className='text-justify text-lg'>
                        We are authorised by the Chief Electrical Inspector to <strong>Government of TELANGANA</strong> vide Authorisation No. <strong>CEIG/TS/OTK/PRT/No.09/D.No.1899/2023</strong> dated 17.08.2023, Validity up to 17.08.2026.
                    </p>
                </div>
                <div className='max-w-[900px] mx-auto'>
                    <h2 className='text-3xl text-etse-primary font-bold text-center mb-14'>
                        Our Top Customers
                    </h2>
                    <article className='flex flex-wrap gap-14 items-center justify-center'>
                        {
                            CUSTOMERS.map((customer, index) => (
                                <img key={index} className='w-[150px] h-[100px]' src={customer} alt="Customer logo" />
                            ))
                        }
                    </article>
                </div>
            </section>
        </main>
    )
}

export default About;
