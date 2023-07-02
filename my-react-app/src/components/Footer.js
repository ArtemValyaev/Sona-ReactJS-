import React from "react"
class Footer extends React.Component {
    render() {
        return(
            <footer class="footer-section">
                <div class="container">
                    <div class="footer-text">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="ft-about">
                                    <div class="logo">
                                        <a href="#">
                                            <img src="img/footer-logo.png" alt=""></img>
                                        </a>
                                    </div>
                                    <p>We inspire and reach millions of travelers<br /> across 90 local websites</p>
                                    <div class="fa-social">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                        <a href="#"><i class="fa fa-tripadvisor"></i></a>
                                        <a href="#"><i class="fa fa-instagram"></i></a>
                                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="ft-contact">
                                    <h6>Contact Us</h6>
                                    <ul>
                                        <li>(12) 345 67890</li>
                                        <li>info.colorlib@gmail.com</li>
                                        <li>856 Cordia Extension Apt. 356, Lake, United State</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 offset-lg-1">
                                <div class="ft-newslatter">
                                    <h6>New latest</h6>
                                    <p>Get the latest updates and offers.</p>
                                    <form action="#" class="fn-form">
                                        <input type="text" placeholder="Email"></input>
                                        <button type="submit"><i class="fa fa-send"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright-option">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <ul>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Environmental Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-5">
                                <div class="co-text"><p>
                                    All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i><br></br> by <a href="#" target="_blank">Artem</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
    }
}

export default Footer