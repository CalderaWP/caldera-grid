import {GRID_ROW_STORE_SLUG} from "./reducer";
export const GRID_ROW_UPDATE_COLUMN = `${GRID_ROW_STORE_SLUG}/UPDATE_COLUMN`;
export const GRID_ROW_ADD_COLUMN  = `${GRID_ROW_STORE_SLUG}/ADD_COLUMN`;
export const GRID_ROW_DELETE_COLUMN  = `${GRID_ROW_STORE_SLUG}/DELETE_COLUMN`;
export const updateRowColumn = (column) => {
    return {
        type: GRID_ROW_UPDATE_COLUMN,
        column
    }
};

export const addRowColumn = (column) => {
    return {
        type: GRID_ROW_ADD_COLUMN,
        column
    }
};

export const deleteRowColumn = (columnId) => {
    return {
        type: GRID_ROW_DELETE_COLUMN,
        columnId
    }
};