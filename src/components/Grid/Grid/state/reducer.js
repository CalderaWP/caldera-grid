export const GRID_STORE_SLUG = 'caldera-grid/grid';
import {GRID_SET_ROW} from "./actions";

export const gridInitialState = {
    rows: {}

};

export const gridReducer = (state = gridInitialState, action) =>
{
    switch (action.type) {
        case  GRID_SET_ROW:
            let rows = state.rows;
            rows[action.newValue.uuid] = action.newValue;
            return {
                ...state,
                rows
            };
            break;

        default:
            return state;
            break;

    }
};