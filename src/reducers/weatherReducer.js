import { GET_BY_GEO } from "../actions/types";
// import { GET_BY_CITY } from "../actions/types";

const initialState = {
    data:[],
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_BY_GEO:
            return{
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
}