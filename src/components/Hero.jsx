import React, { use,} from 'react';


// swiper functionalities
import { EffectCoverflow,Pagination,Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css/navigation";
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { PlantsDataContext } from '../AppContext/AppContext';




const Hero = () => {
    const plantsData = use(PlantsDataContext);
    // const [plants, setPlants] = useState([]);
    // useEffect(() => {
    //     fetch('/plants.json')
    //     .then(res => res.json())
    //     .then(data => setPlants(data))
    // },[])
    // console.log(plants);
    
    return (
        <div>
            {
                plantsData.length > 0 &&  <Swiper
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
                modules={[EffectCoverflow, Pagination,Navigation]}
                className="mySwiper"
            >
                

                {
                    plantsData.map( pItem => < SwiperSlide>

                    <img src={pItem.image} />

                    </SwiperSlide>)
                }
                
            </Swiper>
            }
        </div>
    );
};

export default Hero;