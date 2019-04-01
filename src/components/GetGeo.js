import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class GetGeo extends Component {

    render() {
        // if(!this.props.isGeolocationAvailable){
        //     return <div>Your browser does not support Geolocation</div>
        // }else{
        //     if(!this.props.isGeolocationEnabled){
        //         return <div>Geolocation is not enabled</div>
        //     }else {
        //         if (this.props.coords) {
        //             const lat = parseFloat(this.props.coords.latitude);
        //             const lon = parseFloat(this.props.coords.longitude);
        //             console.log(lat, lon);
        //
        //             return (
        //                 <div>
        //                     <h1>Geo location</h1>
        //                     <Link to="/">Back</Link>
        //
        //                     <div>
        //                         <span>Latitude: ≈{lat.toFixed(2)}</span>
        //                     </div>
        //                     <div>
        //                         <span>Longitude: ≈{lon.toFixed(2)}</span>
        //                     </div>
        //                 </div>
        //             )
        //         } else {
        //             return <div>Getting the location data&hellip; </div>;
        //         }
        //     }
        // }
        return(
            <div>
                <h1>Geo</h1>
            </div>
        )
    }
}

// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: false,
//     },
//     userDecisionTimeout: 5000,
// })(GetGeo);

export default connect()(GetGeo);