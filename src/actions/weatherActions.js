import {GET_BY_GEO, GET_BY_CITY} from './types';
import axios from 'axios';

export const getGeo = (latitude, longtitude, units) => async dispatch => {
    const lat = latitude;
    const lon = longtitude;
    const details = units;

    const APPID = "8fe3c472a676c5b382b004b1bfcaec99"; // main
    // const APPID = "7fb36ae655695a79730ae5642c831cae";


    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${details}&APPID=${APPID}`);
    dispatch({
        type: GET_BY_GEO,
        payload: res.data
    })
};

export const getCity = (location, units) => async dispatch => {
    
    const city = location;
    const details = units;

    // console.log();

    const APPID = "8fe3c472a676c5b382b004b1bfcaec99";
    // const APPID = "7fb36ae655695a79730ae5642c831cae";

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${details}&APPID=${APPID}`);
    dispatch({
        type: GET_BY_CITY,
        payload: res.data
    })
};
