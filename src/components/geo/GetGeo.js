import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';

import GetLocal from './GetLocal';

import Loader from '../layout/Loader';
import Navigation from '../layout/Navigation';

class GetGeo extends Component {
    // state={
    //     units: "metric"
    // };

    // onChange = e => this.setState({units: e.target.value});

    render() {
        if(!this.props.isGeolocationAvailable){
            return <div>Your browser does not support Geolocation</div>
        }else{
            if(!this.props.isGeolocationEnabled){
                return <div>Geolocation is not enabled</div>
            }else {
                if (this.props.coords) {
                    const lat = parseFloat(this.props.coords.latitude);
                    const lon = parseFloat(this.props.coords.longitude);
                    // const units = this.state.units;
                    // console.log(units);
                    return (
                        <React.Fragment>
                            <Navigation/>
                            {/*<select name="units" id="units" onChange={this.onChange}>*/}
                                {/*<option value="metric">Celsius</option>*/}
                                {/*<option value="imperial">Fahrenheit</option>*/}
                            {/*</select>*/}
                            <GetLocal
                                lat={lat}
                                lon={lon}
                                // units={units}
                            />
                        </React.Fragment>
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
