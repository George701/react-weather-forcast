import {GET_BY_GEO} from './types';
import axios from 'axios';

export const getGeo = (latitude, longtitude) => async dispatch => {
    const lat = latitude;
    const lon = longtitude;

    const APPID = "8fe3c472a676c5b382b004b1bfcaec99";


    const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&APPID=${APPID}`);
    // console.log(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${APPID}`);
    dispatch({
        type: GET_BY_GEO,
        payload: res.data
    })
};
