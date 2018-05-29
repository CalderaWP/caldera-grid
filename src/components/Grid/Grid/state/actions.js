import {GRID_STORE_SLUG} from "./reducer";
export  const GRID_SET_ROW = `${GRID_STORE_SLUG}/GET_ROW`;

export const setRow = (newValue) => {
    return {
        type: GRID_SET_ROW,
        newValue:newValue
    }
};
