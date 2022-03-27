import React, { Component } from 'react';

class LastestGame extends Component {
    render() {
        return (
            <div class="latest">
                <div class="container">
                    <div class="latest-games">
                        <h3>Latest Games</h3>
                        <span></span>
                    </div>
                    <div class="latest-top">
                        <div class="col-md-5 trailer-text">
                            <div class="sub-trailer">
                                <div class="col-md-4 sub-img">
                                    <img src="images/v2.jpg" alt="img07" />
                                </div>
                                <div class="col-md-8 sub-text">
                                    <a href="#">Killzone: Shadow Fall for PlayStation 4 Reviews</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="sub-trailer">
                                <div class="col-md-4 sub-img">
                                    <img src="images/v1.jpg" alt="img07" />
                                </div>
                                <div class="col-md-8 sub-text">
                                    <a href="#"> Spiderman 2 Full Version PC Game</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="sub-trailer">
                                <div class="col-md-4 sub-img">
                                    <img src="images/v3.jpg" alt="img07" />
                                </div>
                                <div class="col-md-8 sub-text">
                                    <a href="#">Sega's: Jet Set for Andriod Play Store 4 Reviews</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipi…</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="col-md-7 trailer">
                            <iframe src="https://www.youtube.com/embed/V5-DyoVlNOg?list=PLiVunv1pnIs2c0ORVqY60K3n8XMO9CoGp" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastestGame;