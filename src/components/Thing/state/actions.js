export const SET_THING = 'CALDERA_GRID/THING/SET_THING';

/**
 * Update the thing property
 * 
 * @param newValue
 * @returns {{type: string, newValue: *}}
 */
export const setThing = (newValue) => {
    return {
        type: SET_THING,
        newValue:newValue
    }
};