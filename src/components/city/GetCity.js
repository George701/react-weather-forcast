import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {getCity} from "../../actions/weatherActions";
import PropTypes from "prop-types";

import Content from '../layout/Content';
import Loader from '../layout/Loader';


class GetCity extends Component {
    state = {
        units_state: true,
        location: ""
    };

    onChangeUnits = () => {
        this.setState({units_state: !this.state.units_state})
    };

    componentDidMount(){
        const { city } = this.props.match.params;
        this.setState({location: city});
        let units = getUnits(this.state.units_state);

        this.props.getCity(city, units);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.units_state !== this.state.units_state){
            let units = getUnits(this.state.units_state);

            const { city } = this.props.match.params;
            this.props.getCity(city, units);
        }
    }

    render() {
        const list = this.props.c_data.list;
        const city = this.state.location;
        if(list){
            return (
                <div  className="main-container">

                    <div className="main-header">
                        <h1>
                            <Link to="/" className="back-route">
                                <i className="fas fa-arrow-left"/>
                                {" "}
                            </Link>
                            <span>
                                {getCityName(city)}
                            </span>
                        </h1>

                        <div className="onoffswitch wrapper-ios">
                            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox"
                                   id="myonoffswitch" defaultChecked={this.state.units_state} onChange={this.onChangeUnits} />
                                <label className="onoffswitch-label" htmlFor="myonoffswitch">
                                    <span className="onoffswitch-inner"></span>
                                    <span className="onoffswitch-switch"></span>
                                </label>
                        </div>
                    </div>

                    <Content
                        units = {getUnits(this.state.units_state)}
                        data = {list}
                    />
                </div>
            );
        }else{
            return <Loader/>
        }
    }
}

function getCityName(city){
    return city.substring(0, city.indexOf(","));
}

function getUnits(bool){
    if(bool){
        return "metric"
    }else{
        return "imperial";
    }
}

GetCity.propTypes = {
    // c_data: PropTypes.array.isRequired,
    getCity: PropTypes.func.isRequired,
};

export default connect((state) => {return {c_data: state.weather.c_data}},{getCity})(GetCity);