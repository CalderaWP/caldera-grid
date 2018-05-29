export const GRID_STORE_SLUG = 'caldera-grid/grid';
import {
    GRID_SET_ROW,
    GRID_SET_MODE
} from "./actions";
import {defaultMode} from "../../Column/factory";

export const gridInitialState = {
    rows: {},
    mode: defaultMode

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
        case  GRID_SET_MODE:
            return{
                ...state,
                mode: action.newMode
            };
        default:
            return state;
            break;

    }
};