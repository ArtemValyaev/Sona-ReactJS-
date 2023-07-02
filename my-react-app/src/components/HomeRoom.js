import React from "react"
import roomB1 from "../img/room/room-b1.jpg"
import roomB2 from "../img/room/room-b2.jpg"
import roomB3 from "../img/room/room-b3.jpg"
import roomB4 from "../img/room/room-b4.jpg"


class HomeRoom extends React.Component {
    render() {

    const bg1 = {backgroundImage: 'url(' + roomB1 + ')'};
    const bg2 = {backgroundImage: 'url(' + roomB2 + ')'};
    const bg3 = {backgroundImage: 'url(' + roomB3 + ')'};
    const bg4 = {backgroundImage: 'url(' + roomB4 + ')'};

        return(
            <section class="hp-room-section">
                <div class="container-fluid">
                    <div class="hp-room-items">
                        <div class="row">
                            <div class="col-lg-3 col-md-6">
                                <div class="hp-room-item set-bg" style={bg1} data-setbg={roomB1}>
                                    <div class="hr-text">
                                        <h3>Double Room</h3>
                                        <h2>199$<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion 5</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="#" class="primary-btn">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="hp-room-item set-bg" style={bg2}>
                                    <div class="hr-text">
                                        <h3>Premium King Room</h3>
                                        <h2>159$<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion 5</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="#" class="primary-btn">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="hp-room-item set-bg" style={bg3}>
                                    <div class="hr-text">
                                        <h3>Deluxe Room</h3>
                                        <h2>198$<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion 5</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="#" class="primary-btn">More Details</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="hp-room-item set-bg" style={bg4}>
                                    <div class="hr-text">
                                        <h3>Family Room</h3>
                                        <h2>299$<span>/Pernight</span></h2>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="r-o">Size:</td>
                                                    <td>30 ft</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Capacity:</td>
                                                    <td>Max persion 5</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Bed:</td>
                                                    <td>King Beds</td>
                                                </tr>
                                                <tr>
                                                    <td class="r-o">Services:</td>
                                                    <td>Wifi, Television, Bathroom,...</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <a href="#" class="primary-btn">More Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
    }
}

export default HomeRoom