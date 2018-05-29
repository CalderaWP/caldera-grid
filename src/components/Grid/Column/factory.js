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
export const prepareRow = (row) => {
    Object.keys(row.columns).map( (columnId) => {
        row.columns[columnId] = prepareColumn(row.columns[columnId])
    });
    row.boxMode = row.hasOwnProperty('mode' ) ? row.mode : defaultMode;
    row.defaultMode = defaultMode;
    return row;
};