import {
    GRID_ROW_UPDATE_COLUMN,
    GRID_ROW_ADD_COLUMN,
    GRID_ROW_DELETE_COLUMN,
    GRID_ROW_CHANGE_MODE,
    changeRowMode,
    updateRowColumn,
    addRowColumn,
    deleteRowColumn
} from "./actions";



describe( 'row reducer actions', () =>{
    const column = {
        content: 'HiRoy',
        uuid: '1'
    };
    test( 'add column action', () => {
        const expectedAction = {
            type: GRID_ROW_ADD_COLUMN,
            column        };
        expect(addRowColumn(column)).toEqual(expectedAction);
    });

    test( 'update column action', () => {
        const expectedAction = {
            type: GRID_ROW_UPDATE_COLUMN,
            column
        };
        expect(updateRowColumn(column)).toEqual(expectedAction);
    });

    test( 'delete column action', () => {
        const expectedAction = {
            type: GRID_ROW_DELETE_COLUMN,
            columnId: column.uuid
        };
        expect(deleteRowColumn(column.uuid)).toEqual(expectedAction);
    });


    test( 'change row mode action', () => {
        const expectedAction = {
            type: GRID_ROW_CHANGE_MODE,
            newMode: 'editMode'
        };
        expect(changeRowMode('editMode')).toEqual(expectedAction);
    });
});
