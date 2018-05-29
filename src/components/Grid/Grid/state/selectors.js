import {defaultMode} from "../../Column/factory";

/**
 * Get all rows of grid
 * @param {Object} state
 * @returns {*}
 */
export const getRows = (state) =>  {
    return state.rows;
};

/**
 * Get one row from grid
 *
 * @param state
 * @param rowId
 * @returns {{}}
 */
export const getRow = (state, rowId) => {
    const rows = getRows(state);
    return rows.hasOwnProperty(rowId) ? rows[rowId] : {};
};

/**
 * Get grid mode
 *
 * @param {Object} state
 * @returns {*}
 */
export const getMode = (state ) => {
    return state.hasOwnProperty('mode') ? state.mode : defaultMode;
};