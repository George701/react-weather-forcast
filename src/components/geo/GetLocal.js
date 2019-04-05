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
        lat = this.props.lat;
        lon = this.props.lon;
        units = this.state.units;

        this.props.getGeo(lat,lon, units);
    }

    componentDidUpdate(prevState){
        if(prevState.units !== this.state.units){
            units = this.state.units;
            console.log("Updating...");
            this.props.getGeo(lat,lon, units);
        }
    }

    render() {
        const data = this.props.l_data;
        console.log(data);
        if(data){
            const list = data.list;
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
    // l_data: PropTypes.array.isRequired,
    getGeo: PropTypes.func.isRequired,
};

export default connect((state) => {return {l_data: state.weather.l_data,}},{getGeo})(GetLocal);