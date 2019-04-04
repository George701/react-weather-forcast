import React, { Component } from 'react';
import Moment from 'react-moment';

class WeatherUnit extends Component {
    render(){
        const { unit } = this.props;
        const { units } = this.props;

        let dt = unit.dt_txt;
        let date = String(dt.substring(0, dt.indexOf(" ")));
        let time = String(dt.substring(dt.indexOf(" ")+1, dt.length));
        let now_date = new Date();
        now_date = String(formatDate(now_date));
        let weather = unit.weather[0].main;
        console.log(unit);
        if (date === now_date || time === '12:00:00'){
            if(date === now_date){
                return(
                    <div key={unit.dt} className="wth-unit now tooltip">
                        <div className="wth-line date-time">
                        <span>
                            <Moment  format={'DD MMM HH:mm'}>
                                {unit.dt_txt}
                            </Moment>
                        </span>
                        </div>
                        <div className="wth-line weather">
                            {dnIcon(time, weather)}
                        </div>
                        <div className="wth-line temperature">
                        <span>
                            <i className="fas fa-temperature-low"/>
                            {' '}
                        </span>
                            <span>{unit.main.temp}{' '}{getDegreseUnit(units)}</span>
                        </div>
                        <div className="tooltip-text">
                            <div className="wth-line">Humidity: {unit.main.humidity} %</div>
                            <div className="wth-line">Pressure: {unit.main.pressure} mbar</div>
                            <div className="wth-line">Wind Speed: {unit.wind.speed} {getSpeedUnit(units)}</div>
                            <div className="wth-line">Wind Direction: {getWindDirrection(unit.wind.deg)}</div>
                        </div>
                    </div>
                )
            }else{
                return(
                    <div key={unit.dt} className="wth-unit tooltip">
                        <div className="wth-line date-time">
                        <span>
                            <Moment  format={'DD MMM'}>
                                {unit.dt_txt}
                            </Moment>
                        </span>
                        </div>
                        <div className="wth-line weather future-date">
                            {dnIcon(time, weather)}
                        </div>
                        <div className="wth-line temperature">
                        <span>
                            <i className="fas fa-temperature-low"/>
                            {' '}
                        </span>
                            <span>{unit.main.temp}{' '}{getDegreseUnit(units)}</span>
                        </div>
                    </div>
                )
            }
        }else{
            return "";
        }
    }
}

function getDegreseUnit(unit){
    let d_unit = '';

    if(unit === 'metric'){
        d_unit = "°C";
    }else{
        d_unit = "°F";
    }

    return d_unit;
}

function getSpeedUnit(unit){
    let s_unit = '';

    if(unit === 'metric'){
        s_unit = "meter/second";
    }else{
        s_unit = "miles/hour";
    }

    return s_unit;
}

function getWindDirrection(degrees){
    let result = "";
    degrees = parseFloat(degrees);
    if(degrees > 25 && degrees < 75){
        result = "North-East";
    }else if(degrees > 75 && degrees < 115){
        result = "East";
    }else if(degrees > 115 && degrees < 158){
        result = "South-East";
    }else if(degrees > 158 && degrees < 205){
        result = "South";
    }else if(degrees > 205 && degrees < 255){
        result = "South-West";
    }else if(degrees > 255 && degrees < 298){
        result = "West";
    }else if(degrees > 298 && degrees < 325){
        result = "North-West";
    }else{
        result = "North";
    }
    return result;
}

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

function dnIcon(time, weather){
    if (time === '09:00:00' || time === '12:00:00' || time === '15:00:00' || time === '18:00:00'){
        if(weather === 'Clouds'){
            return <i className="fas fa-cloud-sun sun"/>;
        }else if(weather === 'Rain'){
            return <i className="fas fa-cloud-sun-rain sun"/>;
        }else{
            return <i className="fas fa-sun sun"/>;
        }

    }else{
        if(weather === 'Clouds'){
            return <i className="fas fa-cloud-moon moon"/>;
        }else if(weather === 'Rain'){
            return <i className="fas fa-cloud-moon-rain moon"/>;
        }else{
            return <i className="fas fa-moon moon"/>;
        }
    }
}

export default WeatherUnit;