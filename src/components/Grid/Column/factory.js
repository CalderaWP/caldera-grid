import {EditBox} from "./EditBox";
import {DisplayBox} from "./DisplayBox";

export const defaultMode = 'displayMode';
export const prepareColumn = (column) => {
    const boxProps = {
        content: column.content
    };
    column.boxes = {
        editMode: EditBox(boxProps),
        displayMode:DisplayBox(boxProps)
    };

    return column;
};

/**
 * Prepare mode of row
 *
 * @param {Object} row
 * @returns {*}
 */
export const prepareRowMode = (row) => {
    row.boxMode = row.hasOwnProperty('mode') ? row.mode : defaultMode;
    return row;
};


/**
 * Find row by row ID
 * @param {Object} rows
 * @param {String} rowId
 * @returns {{}}
 */
export const findRow = (rows,rowId) => {
    return rows.hasOwnProperty(rowId) ? rows[rowId] : {};
};

/**
 *
 * @param {Object}row
 * @returns {*}
 */
export const prepareRow = (row) => {
    if( ! row.hasOwnProperty('columns' ) ){
        row.columns = {};
    }else{
        Object.keys(row.columns).map( (columnId) => {
            row.columns[columnId] = prepareColumn(row.columns[columnId])
        });
    }

    prepareRowMode(row);
    row.defaultMode = defaultMode;
    return row;
};