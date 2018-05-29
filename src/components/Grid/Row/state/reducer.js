import {GRID_STORE_SLUG} from "../../Grid/state/reducer";
import {
    GRID_ROW_ADD_COLUMN,
    GRID_ROW_DELETE_COLUMN,
    GRID_ROW_UPDATE_COLUMN
} from "./actions";

export const GRID_ROW_STORE_SLUG = `${GRID_STORE_SLUG}/ROW`;

export const rowReducerInitalState = {
    columns: {}
};

export const rowReducer = (state = rowReducerInitalState, action ) => {
    switch (action.type){
        case GRID_ROW_UPDATE_COLUMN:
        case GRID_ROW_ADD_COLUMN :
            const columns = state.columns;
            columns[action.column.uuid] = action.column;
            return {
                ...state,
                columns
            };
        case GRID_ROW_DELETE_COLUMN:
            delete state.columns[action.columnId];
            return state;
        default:
            return state;
    }
}