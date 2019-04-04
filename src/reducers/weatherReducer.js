import { GET_BY_GEO } from "../actions/types";
import { GET_BY_CITY } from "../actions/types";

const initialState = {
    c_data:[],
    l_data:[],
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_BY_GEO:
            return{
                ...state,
                l_data: action.payload
            };
        case GET_BY_CITY:
            return{
                ...state,
                c_data: action.payload
            };
        default:
            return state;
    }
}