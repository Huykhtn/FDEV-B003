import React, { Component } from 'react';

class ListGame extends Component {
    render() {
        return (
            <div class="content">
                <div class="container">
                    <div class="top-games">
                        <h3>Top Games</h3>
                        <span></span>
                    </div>
                    <div class="top-game-grids">
                        <ul id="flexiselDemo1">
                            <li>
                                <div class="game-grid">
                                    <h4>Action Games</h4>
                                    <p>Nulla elementum nunc tempus.</p>
                                    <img src="images/t1.jpg" class="img-responsive" alt="" />
                                </div>
                            </li>
                            <li>
                                <div class="game-grid">
                                    <h4>Racing Games</h4>
                                    <p>Nulla elementum nunc tempus.</p>
                                    <img src="images/t3.jpg" class="img-responsive" alt="" />
                                </div>
                            </li>
                            <li>
                                <div class="game-grid">
                                    <h4>3D Games</h4>
                                    <p>Nulla elementum nunc tempus.</p>
                                    <img src="images/t4.jpg" class="img-responsive" alt="" />
                                </div>
                            </li>
                            <li>
                                <div class="game-grid">
                                    <h4>Arcade Games</h4>
                                    <p>Nulla elementum nunc tempus.</p>
                                    <img src="images/t2.jpg" class="img-responsive" alt="" />
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        );
    }
}

export default ListGame;