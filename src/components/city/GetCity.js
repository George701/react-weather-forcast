import React, { Component } from 'react';

// import GetCityData from './GetCityData';
import {connect} from "react-redux";
import {getCity} from "../../actions/weatherActions";
import PropTypes from "prop-types";
// import 'moment-timezone';


import Loader from '../layout/Loader';
import Navigation from '../layout/Navigation';
import WeatherUnit from "../layout/WeatherUnit";

let units = '';
let city = '';

class GetCity extends Component {
    state = {
        location: "London,uk",
        units: "metric"
    };

    onChangeCity = e => this.setState({location: e.target.value});
    onChangeUnits = e => this.setState({units: e.target.value});

    componentDidMount(){
        setInterval(() => {
            if(units !== this.state.units || city !== this.state.location){
                city = this.state.location;
                units = this.state.units;

                console.log("Updating...");

                this.props.getCity(city, units);
            }
        }, 1000);
    }

    render() {
        const city = this.state.location;
        const list = this.props.c_data.list;

        let cur_city = city.substr(0, city.indexOf(","));
        if(list){
            return (
                <div>
                    <Navigation/>
                    <div className="city-credentials">
                        <h1>City: {cur_city}</h1>
                        <div>
                            <select name="city" id="chose_city" onChange={this.onChangeCity}>
                                <option value="London,uk">London</option>
                                <option value="Tallinn,est">Tallinn</option>
                                <option value="Helsinki,fi">Helsinki</option>
                            </select>
                            <select name="units" id="units" onChange={this.onChangeUnits}>
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
                </div>
            );
        }else{
            return <Loader/>
        }
    }
}

// export default GetCity;
GetCity.propTypes = {
    // data: PropTypes.array.isRequired,
    getCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    c_data: state.weather.c_data,
});



export default connect(mapStateToProps, {getCity})(GetCity);