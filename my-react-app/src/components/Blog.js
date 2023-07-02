import React from "react"

import blog1 from "../img/blog/blog-1.jpg"
import blog2 from "../img/blog/blog-2.jpg"
import blog3 from "../img/blog/blog-3.jpg"
import blogWide from "../img/blog/blog-wide.jpg"
import blog10 from "../img/blog/blog-10.jpg"

class Blog extends React.Component {
    render() {
        const bg1 = {backgroundImage: 'url(' + blog1 + ')'};
        const bg2 = {backgroundImage: 'url(' + blog2 + ')'};
        const bg3 = {backgroundImage: 'url(' + blog3 + ')'};
        const bg4 = {backgroundImage: 'url(' + blogWide + ')'};
        const bg5 = {backgroundImage: 'url(' + blog10 + ')'};


        return(
            <section class="blog-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Hotel News</span>
                                <h2>Our Blog & Event</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" style={bg1}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel Trip</span>
                                    <h4><a href="#">Tremblant In Canada</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" style={bg2}>
                                <div class="bi-text">
                                    <span class="b-tag">Camping</span>
                                    <h4><a href="#">Choosing A Static Caravan</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item set-bg" style={bg3}>
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><a href="#">Copper Canyon</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 21th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="blog-item small-size set-bg" style={bg4}>
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><a href="#">Trip To Iqaluit In Nunavut A Canadian Arctic City</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 08th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="blog-item small-size set-bg" style={bg5}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel</span>
                                    <h4><a href="#">Traveling To Barcelona</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 12th April, 2019</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
}

export default Blog