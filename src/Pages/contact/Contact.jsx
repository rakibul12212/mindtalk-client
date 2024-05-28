import React from 'react';

const Contact = () => {
    return (
        <div >
            <div>
                <img src="https://www.openproject.org/assets/images/contact/hero-contact-4cf9fa21.png" alt="img" className='max-h-[300px] w-full'/>
            </div>
            <div className='px-20 py-10'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='pb-5 text-2xl font-semibold md:text-6xl text-[#4D869C] w-full md:w-1/4'>
                Book An Appointment
            </div>
            <div className='flex flex-col md:flex-row items-center gap-y-5 md:gap-x-10 '>
                <div className='p-5 border-2 rounded-xl border-[#4D869C]  font-light'>
                    <p>123 Anywhere St.</p>
                    <p>Any City</p>
                    <p>ST 12345</p>
                    <p>Country</p>
                    <div className='py-2'>
                    <p>Telephone: (123) 456-7890</p>
                    <p>Mobile: (123) 456-7890</p>
                    </div>
                    <p className='font-medium'>example@email.com</p>
                </div>
                <div className='px-6 py-5 border-2 rounded-xl border-[#4D869C] '>
                    <h1 className='font-medium pb-4'>Office Hours</h1>
                    <div className='space-y-1.5'>
                    <p>Monday: 8am - 7pm</p>
                    <p>Tuesday: 8am - 5pm</p>
                    <p>Wednesday: 8am - 7pm</p>
                    <p>Thursday: 8am - 5pm</p>
                    <p>Friday: 8am - 7pm</p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Contact;
