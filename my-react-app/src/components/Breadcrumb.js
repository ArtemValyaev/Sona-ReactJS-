import React from "react"
import about_p1 from "../img/about/about-p1.jpg"
import about_p2 from "../img/about/about-p2.jpg"
import about_p3 from "../img/about/about-p3.jpg"


class Breadcrumb extends React.Component {
    render() {
    const bg1 = {backgroundImage: 'url(' + about_p1 + ')'};
    const bg2 = {backgroundImage: 'url(' + about_p2 + ')'};
    const bg3 = {backgroundImage: 'url(' + about_p3 + ')'};


        if (this.props.path == '/about'){
        return(<>

            <div class="breadcrumb-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-text">
                                <h2>About Us</h2>
                                <div class="bt-option">
                                    <a href="./index.html">Home</a>
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>)
            } else if (this.props.path == '/rooms'){
                return(<>
                    <div class="breadcrumb-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="breadcrumb-text">
                                        <h2>Our Rooms</h2>
                                        <div class="bt-option">
                                            <a href="./home.html">Home</a>
                                            <span>Rooms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </>)
            } else if (this.props.path == '/blog'){
                return(<>
                    <div class="breadcrumb-section">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="breadcrumb-text">
                                        <h2>Blog</h2>
                                        <div class="bt-option">
                                            <a href="./home.html">Home</a>
                                            <span>Blog Grid</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </>)
            }

    }
}

export default Breadcrumb