import React from 'react';

const WhyUs = () => {
    return (
        <div className='py-20'>
            <div className='flex justify-center items-center'>
                <p className='pb-20 text-2xl font-semibold md:text-6xl text-[#4D869C]'>Why Us</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                <div className='px-10'>
                    <div>
                        <img src="https://i.ibb.co/jycYqGn/care.png" alt="img" className='max-h-[40px] max-w-[40px] bg-blue-300 rounded-full p-1'/>
                    </div>
                    <p className='max-w-[300px] font-semibold text-lg py-5'>Expertly Trained Therapist</p>
                    <p className='max-w-[300px]'>Use this space to talk about your company's history,background,mission or vission.Talk about your phylosophy and how it affected your company's trajectory</p>
                </div>
                <div className='px-10'>
                    <div>
                        <img src="https://i.ibb.co/SyVYCB4/task-list.png" alt="img" className='max-h-[40px] max-w-[40px] bg-blue-300 rounded-full p-1'/>
                    </div>
                    <p className='max-w-[300px] font-semibold text-lg py-5'>Up-to-Date Practices and Facilities</p>
                    <p className='max-w-[300px]'>Use this space to talk about your company's history,background,mission or vission.Talk about your phylosophy and how it affected your company's trajectory</p>
                </div>
                <div className='px-10'>
                    <div>
                        <img src="https://i.ibb.co/sb8Tthf/policy.png" alt="img" className='max-h-[40px] max-w-[40px] bg-blue-300 rounded-full p-1'/>
                    </div>
                    <p className='max-w-[300px] font-semibold text-lg py-5'>Inclusive Insurance polices</p>
                    <p className='max-w-[300px]'>Use this space to talk about your company's history,background,mission or vission.Talk about your phylosophy and how it affected your company's trajectory</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;