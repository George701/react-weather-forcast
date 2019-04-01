import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Index extends Component {
    render() {
        return (
            <div>
                <h1>Choose a method</h1>
                <Link to="/city">Chose city</Link>
                <Link to="/geo">My location</Link>
            </div>
        );
    }
}

export default Index;