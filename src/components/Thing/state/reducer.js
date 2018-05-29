import {SET_THING } from "./actions";

export const intitalState = { thing: 'Hi Roy' };
export const thingReducer = ( state = intitalState, action ) => {
    switch (action.type){
        case SET_THING :
            return {
                ...state,
                thing:action.newValue
            };
        default:
            return state;
    }
};