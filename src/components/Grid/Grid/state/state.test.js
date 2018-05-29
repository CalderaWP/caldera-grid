import {
    GRID_SET_ROW,
    setRow
} from "./actions";

import {
    gridReducer,
    gridInitialState
} from "./reducer";

describe( 'actions', () =>{
    it( 'sets the row', () => {
        const newValue = {
            content: 'HiRoy',
            uuid: '1'
        };
        const expectedAction = {
            type: GRID_SET_ROW,
            newValue
        };
        expect(setRow(newValue)).toEqual(expectedAction);
    })
});


describe( 'reducer', () => {
    it('should return the initial state', () => {

        expect(gridReducer(undefined, {})).toEqual(gridInitialState);
        expect(gridReducer(gridInitialState, {})).toEqual(gridInitialState);
    });


    it('should setRow', () => {
        const newValue = {
            content: 'HiRoy',
            uuid: '15'
        };

        const expectState = {
            rows : {}
        };
        expectState.rows['15'] = newValue;
        const action = setRow(newValue);
        expect(gridReducer(gridInitialState, action)).toEqual(expectState);
    });

});