import React, { Component } from 'react';
import config from '../../config';
import { nsFetch } from '../../helpers/fetch';

class DepartureScreen extends Component {
    constructor() {
        super();

        this.state = {
            currentStation: config.defaultStation,
            currentContent: null,
        };

    }


    render() {
        return (
            <div>
                More to show here.. At least your current station is: { this.state.currentStation }.
            </div>
        )
    }
}

export default DepartureScreen;
