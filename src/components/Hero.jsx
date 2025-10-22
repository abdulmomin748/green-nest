import React, { useEffect, useState } from 'react';


// swiper functionalities
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/navigation";
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';




const Hero = () => {
    const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch('/plants.json')
        .then(res => res.json())
        .then(data => setPlants(data))
    },[])
    console.log(plants);
    
    return (
        <div>
            {
                plants.length > 0 &&  <Swiper
                navigation
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                scrollbar={{ draggable: true }}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                

                {
                    plants.map( pItem => < SwiperSlide>

                    <img src={pItem.image} />

                    </SwiperSlide>)
                }
                
            </Swiper>
            }
        </div>
    );
};

export default Hero;