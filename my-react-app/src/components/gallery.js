import React from "react"
import gallery_1 from "../img/gallery/gallery-1.jpg"
import gallery_2 from "../img/gallery/gallery-2.jpg"
import gallery_3 from "../img/gallery/gallery-3.jpg"
import gallery_4 from "../img/gallery/gallery-4.jpg"


class Gallery extends React.Component {
    render() {

        const bg1 = {backgroundImage: 'url(' + gallery_1 + ')'};
        const bg2 = {backgroundImage: 'url(' + gallery_2 + ')'};
        const bg3 = {backgroundImage: 'url(' + gallery_3 + ')'};
        const bg4 = {backgroundImage: 'url(' + gallery_4 + ')'};

        return(<>
            <section class="gallery-section spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title">
                                <span>Our Gallery</span>
                                <h2>Discover Our Work</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="gallery-item set-bg" style={bg1}>
                                <div class="gi-text">
                                    <h3>Room Luxury</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="gallery-item set-bg" style={bg3}>
                                        <div class="gi-text">
                                            <h3>Room Luxury</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="gallery-item set-bg" style={bg4}>
                                        <div class="gi-text">
                                            <h3>Room Luxury</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="gallery-item large-item set-bg" style={bg2}>
                                <div class="gi-text">
                                    <h3>Room Luxury</h3>
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

export default Gallery