import React, { Component } from 'react';

import GetCityData from './GetCityData';

class GetCity extends Component {
    state = {
      location: "London,uk"
    };

    onChange = e => this.setState({location: e.target.value});



    render() {
        const city = this.state.location;
        console.log(city);
        return (
            <div>
                <h1>City {city}</h1>
                <select name="city" id="chose_city" onChange={this.onChange}>
                    <option value="London,uk">London</option>
                    <option value="Tallinn,est">Tallinn</option>
                    <option value="Helsinki,fi">Helsinki</option>
                </select>
                <GetCityData
                    location={city}
                />
            </div>
        );
    }
}

export default GetCity;