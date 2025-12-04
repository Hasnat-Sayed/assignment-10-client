import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ban1 from '../assets/ban1.jpg'
import ban2 from '../assets/ban2.jpg'
import ban3 from '../assets/ban3.jpg'
import ban4 from '../assets/ban4.jpg'

const Slider = () => {
    const slides = [
        {
            image: ban1,
            tagline: 'Find Your Furry Friend Today!',
        },
        {
            image: ban2,
            tagline: 'Adopt, Don\'t Shop — Give a Pet a Home',
        },
        {
            image: ban3,
            tagline: 'Because Every Pet Deserves Love and Care',
        },
        {
            image: ban4,
            tagline: 'Open Your Heart, Complete Your Family',
        }
    ];

    return (
        <div className="relative">
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <img
                                src={slide.image}
                                className="h-[300px] md:h-[500px] lg:h-[500px] w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center  px-4 z-10">
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 drop-shadow-lg text-white">
                                    {slide.tagline}
                                </h2>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
