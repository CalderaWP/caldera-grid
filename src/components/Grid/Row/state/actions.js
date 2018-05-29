import {GRID_ROW_STORE_SLUG} from "./reducer";
export const GRID_ROW_UPDATE_COLUMN = `${GRID_ROW_STORE_SLUG}/UPDATE_COLUMN`;
export const GRID_ROW_ADD_COLUMN  = `${GRID_ROW_STORE_SLUG}/ADD_COLUMN`;
export const GRID_ROW_DELETE_COLUMN  = `${GRID_ROW_STORE_SLUG}/DELETE_COLUMN`;
export const GRID_ROW_CHANGE_MODE =  `${GRID_ROW_STORE_SLUG}/CHANGE_MODE`;

/**
 * Creates action to update a column of a row
 * @param {Object} column
 * @returns {{type: string, column: *}}
 */
export const updateRowColumn = (column) => {
    return {
        type: GRID_ROW_UPDATE_COLUMN,
        column
    }
};

/**
 * Creates action to add a column to a row
 * @param {Object} column
 * @returns {{type: string, column: *}}
 */
export const addRowColumn = (column) => {
    return {
        type: GRID_ROW_ADD_COLUMN,
        column
    }
};

/**
 * Creates action to delete a column from a row
 * @param {String} columnId
 * @returns {{type: string, column: *}}
 */
export const deleteRowColumn = (columnId) => {
    return {
        type: GRID_ROW_DELETE_COLUMN,
        columnId
    }
};

/**
 * Creates and action to change the mode of the row
 *
 * @param {String} newMode
 * @returns {{type: string, newMode: *}}
 */
export  const changeRowMode = (newMode) => {
    return {
        type: GRID_ROW_CHANGE_MODE,
        newMode
    }

};