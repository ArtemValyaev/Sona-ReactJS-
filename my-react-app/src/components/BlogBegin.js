import React from "react"

import blog_1 from "../img/blog/blog-1.jpg"
import blog_2 from "../img/blog/blog-2.jpg"
import blog_3 from "../img/blog/blog-3.jpg"
import blog_4 from "../img/blog/blog-4.jpg"
import blog_5 from "../img/blog/blog-5.jpg"
import blog_6 from "../img/blog/blog-6.jpg"
import blog_7 from "../img/blog/blog-7.jpg"
import blog_8 from "../img/blog/blog-8.jpg"
import blog_9 from "../img/blog/blog-9.jpg"


class BlogBegin extends React.Component {
    render() {
        const bg1 = {backgroundImage: 'url(' + blog_1 + ')'};
        const bg2 = {backgroundImage: 'url(' + blog_2 + ')'};
        const bg3 = {backgroundImage: 'url(' + blog_3 + ')'};
        const bg4 = {backgroundImage: 'url(' + blog_4 + ')'};
        const bg5 = {backgroundImage: 'url(' + blog_5 + ')'};
        const bg6 = {backgroundImage: 'url(' + blog_6 + ')'};
        const bg7 = {backgroundImage: 'url(' + blog_7 + ')'};
        const bg8 = {backgroundImage: 'url(' + blog_8 + ')'};
        const bg9 = {backgroundImage: 'url(' + blog_9 + ')'};



        return(<>
            <section class="blog-section blog-page spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg1}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel Trip</span>
                                    <h4><a href="./blog-details.html">Tremblant In Canada</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg2}>
                                <div class="bi-text">
                                    <span class="b-tag">Camping</span>
                                    <h4><a href="./blog-details.html">Choosing A Static Caravan</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg3}>
                                <div class="bi-text">
                                    <span class="b-tag">Event</span>
                                    <h4><a href="./blog-details.html">Copper Canyon</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 21th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg4}>
                                <div class="bi-text">
                                    <span class="b-tag">Trivago</span>
                                    <h4><a href="./blog-details.html">A Time Travel Postcard</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 22th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg5}>
                                <div class="bi-text">
                                    <span class="b-tag">Camping</span>
                                    <h4><a href="./blog-details.html">A Time Travel Postcard</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 25th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg6}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel Trip</span>
                                    <h4><a href="./blog-details.html">Virginia Travel For Kids</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 28th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg7}>
                                <div class="bi-text">
                                    <span class="b-tag">Travel Trip</span>
                                    <h4><a href="./blog-details.html">Bryce Canyon A Stunning</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 29th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg8}>
                                <div class="bi-text">
                                    <span class="b-tag">Event & Travel</span>
                                    <h4><a href="./blog-details.html">Motorhome Or Trailer</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 30th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="blog-item set-bg" style={bg9}>
                                <div class="bi-text">
                                    <span class="b-tag">Camping</span>
                                    <h4><a href="./blog-details.html">Lost In Lagos Portugal</a></h4>
                                    <div class="b-time"><i class="icon_clock_alt"></i> 30th April, 2019</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="load-more">
                                <a href="#" class="primary-btn">Load More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
    }
}

export default BlogBegin