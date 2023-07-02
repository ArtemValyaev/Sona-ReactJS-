import React from "react"
import Slider from "./sliderHero"
import hero_1 from "../img/hero/hero-1.jpg"
import hero_2 from "../img/hero/hero-2.jpg"
import hero_3 from "../img/hero/hero-3.jpg"



class HeroSection extends React.Component {
    slider = [
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
    ]
    render() {
        return(
            <section class="hero-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero-text">
                                <h1>Sona A Luxury Hotel</h1>
                                <p>Here are the best hotel booking sites, including recommendations for international
                                    travel and for finding low-priced hotel rooms.</p>
                                <a href="#" class="primary-btn">Discover Now</a>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5 offset-xl-2 offset-lg-1">
                            <div class="booking-form">
                                <h3>Booking Your Hotel</h3>
                                <form action="#">
                                    <div class="check-date">
                                        <label for="date-in">Check In:</label>
                                        <input type="text" class="date-input" id="date-in"></input>
                                        <i class="icon_calendar"></i>
                                    </div>
                                    <div class="check-date">
                                        <label for="date-out">Check Out:</label>
                                        <input type="text" class="date-input" id="date-out"></input>
                                        <i class="icon_calendar"></i>
                                    </div>
                                    <div class="select-option">
                                        <label for="guest">Guests:</label>
                                        <select id="guest">
                                            <option value=""><p>2 Adults</p></option>
                                            <option value="">3 Adults</option>
                                        </select>
                                    </div>
                                    <div class="select-option">
                                        <label for="room">Room:</label>
                                        <select id="room">
                                            <option value="">1 Room</option>
                                            <option value="">2 Room</option>
                                        </select>
                                    </div>
                                    <button type="submit">Check Availability</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero-slider">
                    <Slider slides={this.slider}/>
                </div>
            </section>
        )
    }
}

export default HeroSection