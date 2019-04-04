import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <div className="index-container">
                <div className="index-header">
                    <h1>Weather Application</h1>
                    <h2>Choose a method</h2>
                </div>
                <div className="index-list">
                    <Link to="/city" className="index-item">
                        <span>Chose city{' '}</span>
                        <i className="fas fa-map-marked-alt"/>
                    </Link>
                    <Link to="/geo" className="index-item">
                        <span>My location{' '}</span>
                        <i className="fas fa-map-signs"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Index;