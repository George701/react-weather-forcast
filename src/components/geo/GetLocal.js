import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getGeo} from '../../actions/weatherActions';

import Loader from '../layout/Loader';
import WeatherUnit from "../layout/WeatherUnit";
import Navigation from '../layout/Navigation';
import Footer from '../layout/Footer';

let units = '';
let lat = '';
let lon = '';

class GetLocal extends Component {
    state={
        units: "metric"
    };

    onChange = e => this.setState({units: e.target.value});

    componentDidMount(){
        setInterval(() => {
            if(units !== this.state.units){
                // try let
                lat = this.props.lat;
                lon = this.props.lon;
                units = this.state.units;

                console.log("Updating...");

                this.props.getGeo(lat,lon, units);
            }
        }, 1000);
    }

    render() {
        const data = this.props.l_data;
        console.log(data);
        if(data){
            const list = data.list;
            const test = this.state.units;
            if(list){
                return(
                    <React.Fragment>
                        <Navigation/>
                        <div className="city-credentials">
                            <h1>City: <strong>{data.city.name}</strong>, Country: {data.city.country}</h1>
                            <div>
                                <select name="units" id="units" onChange={this.onChange}>
                                    <option value="metric">Celsius</option>
                                    <option value="imperial">Fahrenheit</option>
                                </select>
                            </div>
                        </div>
                        <div className="wth-block">
                            {list.map(w_unit =>
                                <WeatherUnit
                                    key={w_unit.dt}
                                    unit={w_unit}
                                    units={units}
                                />
                            )}
                        </div>
                        <Footer/>
                    </React.Fragment>)
            }else{
                return <Loader/>
            }
        }else{
            return <Loader/>
        }

    }
}

GetLocal.propTypes = {
    // data: PropTypes.array.isRequired,
    getGeo: PropTypes.func.isRequired,
};

// function getOptions(state){
//     if(state==="metric"){
//         return(
//            <React.Fragment>
//                <option value="metric">Celsius</option>
//                <option value="imperial">Fahrenheit</option>
//            </React.Fragment>
//         )
//     }else{
//         return(
//             <React.Fragment>
//                 <option value="imperial">Fahrenheit</option>
//                 <option value="metric">Celsius</option>
//             </React.Fragment>
//         )
//     }
//
// }

// const mapStateToProps = (state) => ({
//     l_data: state.weather.l_data,
// });

// export default connect(mapStateToProps, {getGeo})(GetLocal);
export default connect((state) => {return {l_data: state.weather.l_data,}},{getGeo})(GetLocal);