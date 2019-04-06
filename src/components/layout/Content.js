import React, { Component } from 'react';
import Moment from 'react-moment';

import CurrentUnit from "./CurrentUnit";
import FutureUnits from "./FutureUnits";

class Content extends Component {
    render(){
        const units = this.props.units;
        const data = this.props.data;
        // console.log(data);
        return(
            <div className="weather-unit">
                <h1 className="current-data">
                    <Moment  format={'dddd, MMMM Do YYYY'}>
                        {data[0].dt_txt}
                    </Moment>
                </h1>
                <h2 className="current-data">{capitalizeFirstLetter(data[0].weather[0].description)}</h2>
                <div className="weather-container">
                    <CurrentUnit
                        units={units}
                        data={data}
                    />
                    <FutureUnits
                        units={units}
                        data={data}
                    />
                </div>
            </div>
        )
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Content;
