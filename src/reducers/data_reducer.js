import {STREAM_CHANNELS} from '../actions/types';

export default function data_reducer(state =[], action){
    switch(action.type){
        case STREAM_CHANNELS:
            console.log(action.payload);
            return [...state, action.payload];
    }
    return state;
}