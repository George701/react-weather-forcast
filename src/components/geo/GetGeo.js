import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';

import GetLocal from './GetLocal';

import Loader from '../layout/Loader';

class GetGeo extends Component {

    render() {
        if(!this.props.isGeolocationAvailable){
            return <div>
                        <Loader/>
                        {alert("Your browser does not support Geolocation")}
                    </div>
        }else{
            if(!this.props.isGeolocationEnabled){
                return <div>
                            <Loader/>
                            {alert("Geolocation is not enabled")}
                        </div>
            }else {
                if (this.props.coords) {
                    const lat = parseFloat(this.props.coords.latitude);
                    const lon = parseFloat(this.props.coords.longitude);
                    return (
                        <GetLocal
                            lat={lat}
                            lon={lon}
                        />
                    )
                } else {
                    return <Loader/>;
                }
            }
        }
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GetGeo);
