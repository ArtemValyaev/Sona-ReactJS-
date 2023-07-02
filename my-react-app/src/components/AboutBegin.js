import React from "react"
import about_p1 from "../img/about/about-p1.jpg"
import about_p2 from "../img/about/about-p2.jpg"
import about_p3 from "../img/about/about-p3.jpg"
class AboutBegin extends React.Component {
    render() {

        const bg1 = {backgroundImage: 'url(' + about_p1 + ')'};
        const bg2 = {backgroundImage: 'url(' + about_p2 + ')'};
        const bg3 = {backgroundImage: 'url(' + about_p3 + ')'};

        return(<>
            <section class="aboutus-page-section spad">
                <div class="container">
                    <div class="about-page-text">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="ap-title">
                                    <h2>Welcome To Sona.</h2>
                                    <p>Built in 1910 during the Belle Epoque period, this hotel is located in the center of
                                        Paris, with easy access to the city’s tourist attractions. It offers tastefully
                                        decorated rooms.</p>
                                </div>
                            </div>
                            <div class="col-lg-5 offset-lg-1">
                                <ul class="ap-services">
                                    <li><i class="icon_check"></i> 20% Off On Accommodation.</li>
                                    <li><i class="icon_check"></i> Complimentary Daily Breakfast</li>
                                    <li><i class="icon_check"></i> 3 Pcs Laundry Per Day</li>
                                    <li><i class="icon_check"></i> Free Wifi.</li>
                                    <li><i class="icon_check"></i> Discount 20% On F&B</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="about-page-services">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="ap-service-item set-bg" style={bg1}>
                                    <div class="api-text">
                                        <h3>Restaurants Services</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="ap-service-item set-bg" style={bg2}>
                                    <div class="api-text">
                                        <h3>Travel & Camping</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="ap-service-item set-bg" style={bg3}>
                                    <div class="api-text">
                                        <h3>Event & Party</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    }
}

export default AboutBegin