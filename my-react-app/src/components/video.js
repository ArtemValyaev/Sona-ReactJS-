import React from "react"
import video from "../img/video-bg.jpg"
import play from "../img/play.png"


class Video extends React.Component {
    render() {
        const bg1 = {backgroundImage: 'url(' + video + ')'};
        return(<>
            <section class="video-section set-bg" style={bg1}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="video-text">
                                <h2>Discover Our Hotel & Services.</h2>
                                <p>It S Hurricane Season But We Are Visiting Hilton Head Island</p>
                                <a href="https://www.youtube.com/watch?v=EzKkl64rRbM" class="play-btn video-popup">
                                    <img src={play} alt=""></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
    }
}

export default Video