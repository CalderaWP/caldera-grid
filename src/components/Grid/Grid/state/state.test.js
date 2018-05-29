import {
    GRID_SET_ROW,
    GRID_SET_MODE,
    setRow,
    setMode
} from "./actions";

import {
    getRows,
    getRow,
    getMode
} from "./selectors";

import {
    gridReducer,
    gridInitialState
} from "./reducer";

import {defaultMode} from "../../Column/factory";

describe( 'grid actions', () =>{
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
    });

    it( 'sets the mode', () => {
        const newMode = 'displayMode';
        const expectedAction = {
            type: GRID_SET_MODE,
            newMode
        };
        const action = setMode(newMode);
        expect(action).toEqual(expectedAction);
        expect(action.newMode).toEqual(newMode);
    });
});

describe( 'grid selectors', () => {
    let state = {
        rows: {
            'r1' : {
                uuid: 'r1'
            },
            'r2' : {
                uuid: 'r2'
            }
        },
        mode: 'displayMode'
    }

    it( 'getRows gets the rows', () => {
        expect(getRows(state)).toEqual(state.rows);
    });

    it( 'getRow gets the right row row', () => {
        expect(getRow(state, 'r2')).toEqual(state.rows['r2']);
    });

    it( 'getRow returns empty array when no row found', () => {
        expect(getRow(state, 'r777')).toEqual({});
    });

    it( 'getMode gets the right mode', () => {
        expect(getMode(state)).toEqual('displayMode' );
    });

    it( 'getMode gets the default mode', () => {
        expect(getMode({})).toEqual(defaultMode );
    });
});

describe( 'grid reducer', () => {
    it('should return the initial state', () => {

        expect(gridReducer(undefined, {})).toEqual(gridInitialState);
        expect(gridReducer(gridInitialState, {})).toEqual(gridInitialState);
    });

    it('should use default mode', () => {
        const state = gridReducer(undefined, {});
        expect(state.mode).toEqual(defaultMode);

    });

    it('should setRow', () => {
        const newValue = {
            content: 'HiRoy',
            uuid: 'arms15'
        };

        const expectState = {
            rows : {},
            mode: defaultMode
        };
        expectState.rows['arms15'] = newValue;
        const action = setRow(newValue);
        expect(gridReducer(gridInitialState, action)).toEqual(expectState);
    });

    it('should setMode', () => {

        const expectState = {
            rows: {
                'r1' : {
                    uuid: 'r1'
                },
                'r2' : {
                    uuid: 'r2'
                }
            },
            mode: 'editMode'
        };
        const action = setMode('displayMode');
        const state = gridReducer({}, action);
        expect(state.mode).toEqual('displayMode');
    });

});





