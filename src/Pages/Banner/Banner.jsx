import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import { Navigation, Autoplay } from 'swiper/modules';
import Button from '../../Component/ui/Button/Button';


const Banner = () => {
    const slides = [
        {
             imageUrl: '../../../public/banner.avif', 
             heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
             text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae eaque saepe id distinctio! Nostrum.'
         },
        { 
             imageUrl: '../../../public/banner1.avif',
             heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
             text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae eaque saepe id distinctio! Nostrum.' 
        },
        {
              imageUrl: '../../../public/banner2.avif',
              heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis beatae eaque saepe id distinctio! Nostrum.' 
        },
        
    ];
    return (
        <Swiper  
        autoplay={{ delay: 4000 }}
        navigation={false}
        modules={[Navigation, Autoplay]} 
        className="mySwiper ">
            {slides.map((slide, index) => (
                <SwiperSlide className='bg-img' key={index} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                   
                   
                    <div className="slide-content py-32 px-20 container">
                    <h2 className='text-xl font-semibold md:font-bold md:text-6xl w-2/4 md:w-2/4  bg-gradient-to-r from-[#2d708a] via-[#38a1fc] to-pink-500 text-transparent bg-clip-text'>{slide.heading}</h2>

                        <h2 className='font-extralight w-2/4 md:w-2/4 py-10 text-gray-200'>{slide.text}</h2>
                        
                        <Button text='Schedule a Consultation'  bgColor='bg-gradient-to-r from-[#2d708a] via-[#38a1fc] to-pink-300' hoverColor='bg-[#7AB2B2]'></Button>
                        
                    </div>


                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default Banner;
