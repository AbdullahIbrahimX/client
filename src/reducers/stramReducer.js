import _ from "lodash"
import {CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM
} from "../actions/types";

const streamReducer = (state={},action) =>{
    switch (action.type){
        case CREATE_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case FETCH_STREAM:
            return {...state,[action.payload.id]:action.payload}
        case EDIT_STREAM:
            // const newState = {...state}
            // newState[action.payload.id] = action.payload
            // return newState
            //** much better ahhh
            return {...state}
        case DELETE_STREAM:
            return _.omit(state,action.payload)
        case FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload,"id")}
        default:
            return state
    }
}

export default streamReducer;
