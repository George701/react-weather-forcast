import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getGeo} from '../../actions/weatherActions';
import { Link } from 'react-router-dom';

import Content from '../layout/Content';
import Loader from '../layout/Loader';


class GetLocal extends Component {
    state = {
        units_state: true,
    };

    onChangeUnits = () => {
        // console.log("clicked: "+!this.state.units_state);
        this.setState({units_state: !this.state.units_state})
    };

    componentDidMount(){
        const lat = this.props.lat;
        const lon = this.props.lon;
        let units = getUnits(this.state.units_state);

        this.props.getGeo(lat,lon, units);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.units_state !== this.state.units_state){
            let units = getUnits(this.state.units_state);

            const lat = this.props.lat;
            const lon = this.props.lon;

            this.props.getGeo(lat,lon, units);
        }
    }

    render() {
        const list = this.props.l_data.list;

        if(list){
            // this.setState({location: city});
            return(
                <div  className="main-container">
                    <div className="main-header">
                        <h1>
                            <Link to="/" className="back-route">
                                <i className="fas fa-arrow-left"/>
                                {" "}
                            </Link>
                            <span>
                                {this.props.l_data.city.name}
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
            )
        }else{
            return <Loader/>
        }
    }
}

function getUnits(bool){
    if(bool){
        return "metric"
    }else{
        return "imperial";
    }
}

GetLocal.propTypes = {
    // l_data: PropTypes.array.isRequired,
    getGeo: PropTypes.func.isRequired,
};

export default connect((state) => {return {l_data: state.weather.l_data,}},{getGeo})(GetLocal);