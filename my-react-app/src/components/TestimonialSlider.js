
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import testimonialLogo from "../img/testimonial-logo.png"


export const TestimonialSlider = ({ slides }) => {
        return (
            <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {[
                    {
                        "image": testimonialLogo,
                        "title": 'After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.',
                        "name": ' - Alexander Vasquez'
                    },
                    {
                        "image": testimonialLogo,
                        "title": 'After a construction project took longer than expected, my husband, my daughter and I needed a place to stay for a few nights. As a Chicago resident, we know a lot about our city, neighborhood and the types of housing options available and absolutely love our vacation at Sona Hotel.',
                        "name": ' - Alexander Vasquez'
                    },
                    
                ].map((slide) => (
                    
                    <SwiperSlide key={slide.image} className='TestimonialSlider'>
                                <div class="ts-item" className='TestimonialSlider_slide'>
                                    <p>{slide.title}</p>
                                    <div class="ti-author">
                                        <div class="rating">
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star"></i>
                                            <i class="icon_star-half_alt"></i>
                                        </div>
                                        <h5>{slide.name}</h5>
                                    </div>
                                    <div className='TestimonialSlider_slide_img'><img src={slide.image} alt=""></img></div>
                                    
                                </div>
                    </SwiperSlide>
                
                ))}

            </Swiper>
        );
    
};

export default TestimonialSlider