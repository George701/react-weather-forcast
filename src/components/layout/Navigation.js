import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render(){
        return(
            <ul className="nav-main">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        <i className="fas fa-home"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/city" className="nav-link">
                        City{' '}
                        <i className="fas fa-city"/>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/geo" className="nav-link">
                        Geo Location{' '}
                        <i className="fas fa-globe-europe"/>
                    </Link>
                </li>
            </ul>
        )
    }
}

export default Navigation;