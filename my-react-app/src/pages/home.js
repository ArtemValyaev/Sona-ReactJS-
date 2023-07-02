import React from "react"
import HeroSection from "../components/hero-section"
import AboutUs from "../components/AboutUs"
import Services from "../components/Services"
import HomeRoom from "../components/HomeRoom"
import Testimonial from "../components/Testimonial"
import Blog from "../components/Blog"



class Home extends React.Component {
    render() {
        return(<>
            <HeroSection />
            <AboutUs />
            <Services />
            <HomeRoom />
            <Testimonial />
            <Blog />
        </>
    )
    }
}

export default Home