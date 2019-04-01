import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GetCity extends Component {
    render() {
        return (
            <div>
                <h1>City</h1>
                <Link to="/">Back</Link>
            </div>
        );
    }
}

export default GetCity;