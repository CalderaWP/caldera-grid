import {GRID_STORE_SLUG} from "./reducer";
export  const GRID_SET_ROW = `${GRID_STORE_SLUG}/SET_ROW`;
export  const GRID_SET_MODE = `${GRID_STORE_SLUG}/SET_MODE`;

/**
 * Add or update a row in the grid
 *
 * @param newValue
 * @returns {{type: string, newValue: *}}
 */
export const setRow = (newValue) => {
    return {
        type: GRID_SET_ROW,
        newValue:newValue
    }
};

/**
 * Change the mode for the grid
 * @param {String} newMode
 * @returns {{type: string, newMode: *}}
 */
export const setMode = (newMode) => {
    return {
        type: GRID_SET_MODE,
        newMode
    }
};