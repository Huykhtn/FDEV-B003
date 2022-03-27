import React, { Component } from 'react';
import Slider from '../Modules/Slider';
import TopBanner from '../Modules/TopBanner';

class Header extends Component {
    render() {
        return (
            <div>
                <TopBanner />
                <Slider />
            </div>
        );
    }
}

export default Header;