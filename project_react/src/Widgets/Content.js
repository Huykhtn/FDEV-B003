import React, { Component } from 'react';
import LastestGame from '../Modules/LastestGame';
import ListGame from '../Modules/ListGame';
import NewFeature from '../Modules/NewFeature';
import Poster from '../Modules/Poster';

class Content extends Component {
    render() {
        return (
            <div>
                <ListGame />
                <LastestGame />
                <Poster />
                <NewFeature />
            </div>
        );
    }
}

export default Content;