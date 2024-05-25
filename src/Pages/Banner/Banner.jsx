import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Banner.css';
import { Navigation, Autoplay } from 'swiper/modules';


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
        autoplay={{ delay: 3000 }}
        navigation={true}
        modules={[Navigation, Autoplay]} 
        className="mySwiper">
            {slides.map((slide, index) => (
                <SwiperSlide className='bg-img' key={index} style={{ backgroundImage: `url(${slide.imageUrl})` }}>
                   
                   
                    <div className="slide-content">
                        <h2 className='p-20 text-6xl w-2/4'>{slide.heading}</h2>
                        <h2 className='p-20'>{slide.text}</h2>
                        
                    </div>

                    
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default Banner;
