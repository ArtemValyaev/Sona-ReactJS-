import React from "react"
import Slider from "./sliderHero"
import TestimonialLogo from "../img/testimonial-logo.png"
import TestimonialSlider from "./TestimonialSlider"
class Testimonial extends React.Component {
    render() {
        return(
            <section class="testimonial-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Testimonials</span>
                                <h2>What Customers Say?</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <div class="testimonial-slider">
                                <TestimonialSlider />
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
    )
    }
}

export default Testimonial