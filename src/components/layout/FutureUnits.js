import React, { Component } from 'react';
import Moment from 'react-moment';

class FutureUnits extends Component {
    render(){
        const units = this.props.units;
        const data = this.props.data;
        let dt, date, now_date, time, weather;
        return(
            <div className="future-units">
                {data.map(weather_item =>{
                    dt = weather_item.dt_txt;
                    date = String(dt.substring(0, dt.indexOf(" ")));
                    now_date = new Date();
                    now_date = String(formatDate(now_date));
                    weather = weather_item.weather[0].main;
                    time = String(dt.substring(dt.indexOf(" ") + 1, dt.length));
                    if(time === "12:00:00"){
                        return(
                            <div className="future-item" key={weather_item.dt}>
                                <div className="future-item-day">
                                    <Moment  format={'dddd'}>
                                        {dt}
                                    </Moment>
                                </div>
                                <div className="future-item-weather">
                                    {dnIcon(time, weather)}
                                </div>
                                <div className="future-item-temperature">
                                    {parseInt(weather_item.main.temp)}{getDegreesUnit(units)}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        )
    }
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

function getDegreesUnit(unit){
    let d_unit = '';

    if(unit === 'metric'){
        d_unit = "°C";
    }else{
        d_unit = "°F";
    }

    return d_unit;
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

export default FutureUnits;