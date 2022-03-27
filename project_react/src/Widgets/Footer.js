import React, { Component } from 'react';
import CopyRight from '../Modules/CopyRight';
import FooterInfo from '../Modules/FooterInfo';

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterInfo />
                <CopyRight />
            </div>
        );
    }
}

export default Footer;