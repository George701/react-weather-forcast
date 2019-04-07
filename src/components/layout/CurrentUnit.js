import React, { Component } from 'react';

class CurrentUnit extends Component {
    render(){
        const units = this.props.units;
        const data = this.props.data;
        if (data) {
            let dt = data[0].dt_txt;
            let date = String(dt.substring(0, dt.indexOf(" ")));
            let time = String(dt.substring(dt.indexOf(" ") + 1, dt.length));
            let weather = data[0].weather[0].main;
            let temperature = parseInt(data[0].main.temp);
            return (
                <div className="current-unit">
                    <div className="current-weather">
                        <div className="current-weather-handler">
                            <span className="c-weather-unit">
                                <span className="c-weather-unit-handler">
                                    <span>{temperature}</span>
                                    <span>{units}</span>
                                </span>
                            </span>
                            <span className="c-weather-unit">
                                <span className="c-weather-unit-handler">
                                    {dnIcon(time, weather)}
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="today-weather">
                        {data.map(weather_item =>{
                            dt = weather_item.dt_txt;
                            date = String(dt.substring(0, dt.indexOf(" ")));
                            let now_date = new Date();
                            now_date = String(formatDate(now_date));
                            time = String(dt.substring(dt.indexOf(" ") + 1, dt.length));
                            if (date === now_date) {
                                if(time === "03:00:00" || time === "09:00:00" || time === "15:00:00" || time === "21:00:00"){
                                    return(
                                        <div className="weather-item" key={weather_item.dt}>
                                            <div className="weather-item-handler">
                                                <span>{getDayTime(time)} </span>
                                                <span>{parseInt(weather_item.main.temp)}{units}</span>
                                            </div>
                                            <div className="weather-item-handler"></div>
                                        </div>
                                    )
                                }
                            }
                        })}
                    </div>
                </div>
            )
        }
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

function getDayTime(time){
    switch(time){
        case "00:00:00":
            return "Night";
        case "03:00:00":
            return "Night";
        case "06:00:00":
            return "Morning";
        case "09:00:00":
            return "Morning";
        case "12:00:00":
            return "Day";
        case "15:00:00":
            return "Day";
        case "18:00:00":
            return "Evening";
        case "21:00:00":
            return "Evening";
    }
}


export default CurrentUnit;