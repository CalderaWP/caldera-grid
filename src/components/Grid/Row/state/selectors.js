import {
    prepareRowMode,
    prepareRow,
    findRow

} from "../../Column/factory";
import {getRows} from "../../Grid/state/selectors";

/**
 * Get the mode for a row
 * @param {Object}row
 * @returns {*}
 */
export const getRowMode = (state,rowId ) => {
    const rows = getRows(state);
    const row = prepareRowMode(findRow(rows,rowId));
    return row.boxMode;
};

/**
 * Get columns of a row
 * @param row
 * @returns {{}}
 */
export const getColumns = (state,rowId ) => {
    const rows = getRows(state);
    return rows.hasOwnProperty(rowId) ?  rows[rowId].columns : {};
};


