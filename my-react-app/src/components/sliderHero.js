
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import hero_1 from "../img/hero/hero-1.jpg"
import hero_2 from "../img/hero/hero-2.jpg"
import hero_3 from "../img/hero/hero-3.jpg"

export const Slider = ({ slides }) => {
        return (
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {[
                    {
                        "image": hero_1,
                        "title": 'hero_1'
                    },
                    {
                        "image": hero_2,
                        "title": 'hero_2'
                    },
                    {
                        "image": hero_3,
                        "title": 'hero_3'
                    },
                ].map((slide) => (
                    <SwiperSlide key={slide.image}><img src={slide.image} alt={slide.title}>
                        </img>
                    </SwiperSlide>
                
                ))}

            </Swiper>
        );
    
};

export default Slider