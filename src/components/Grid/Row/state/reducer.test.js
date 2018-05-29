import {
    updateRowColumn,
    addRowColumn,
    deleteRowColumn
} from "./actions";

import {
    rowReducerInitalState,
    rowReducer
} from "./reducer";

import {defaultMode} from "../../Column/factory";


describe( 'row reducer', () => {
    test('should return the initial state', function() {
        expect(rowReducer(undefined, {})).toEqual(rowReducerInitalState);
        expect(rowReducer(rowReducerInitalState, {})).toEqual(rowReducerInitalState);
    });

    test( 'default mode is used correctly', () => {
        const state = rowReducer(undefined, {});
        expect(state.mode).toEqual(defaultMode);
    });

    test( 'should update add columns to rows', function()  {
        const newValue = {
            content: 'HiRoy',
            uuid: '15'
        };

        const expectState = {
            columns : {},
            mode: defaultMode
        };
        expectState.columns['15'] = newValue;
        const action = addRowColumn(newValue);
        expect(rowReducer(rowReducerInitalState, action)).toEqual(expectState);
        const state = rowReducer(rowReducerInitalState, action);
        expect( state.columns['15']).toEqual(newValue);
    } );

    test( 'should add and update columns in rows', function() {
        let newValue = {
            content: 'Hydrogen',
            uuid: 'h15'
        };

        const expectState = {
            columns : {}
        };
        expectState.columns['15'] = newValue;
        let action = addRowColumn(newValue);
        let state = rowReducer(rowReducerInitalState, action);
        expect( state.columns['h15']).toEqual(newValue);

        newValue.content = 'Hi Mike';
        action = addRowColumn(newValue);
        state = rowReducer(rowReducerInitalState, action);
        expect( state.columns['h15']).toEqual(newValue);
    } );

    test( 'should add two columns to row', function() {
        let columnOne = {
            content: 'HiRoy',
            uuid: 'r15'
        };

        let columnTwo = {
            content: 'Hi Mike',
            uuid: 'r17'
        };


        let action = addRowColumn(columnOne);
        let state = rowReducer(rowReducerInitalState, action);
        expect( state.columns['r15']).toEqual(columnOne);


        action = addRowColumn(columnTwo);
        state = rowReducer(state, action);
        expect( state.columns['r15']).toEqual(columnOne);
        expect( state.columns['r17']).toEqual(columnTwo);
    } );

    test( 'should delete row column', function() {
        let columnOne = {
            content: 'HiRoy',
            uuid: 'r15'
        };


        let action = addRowColumn(columnOne);
        let state = rowReducer(rowReducerInitalState, action);
        expect( state.columns['r15']).toEqual(columnOne);

        action = deleteRowColumn('r15');
        state = rowReducer(state, action);
        expect( state.columns.hasOwnProperty('r15')).toEqual(false);
    } );

    test( 'should update column in row', function() {
        let columnOne = {
            content: 'HiRoy',
            uuid: 'r15'
        };

        let columnTwo = {
            content: 'Hi Mike',
            uuid: 'r17'
        };

        let action = addRowColumn(columnOne);
        let state = rowReducer(rowReducerInitalState, action);
        action = addRowColumn(columnTwo);
        state = rowReducer(state, action);


        columnTwo.content = 'Tacos';
        action = updateRowColumn(columnTwo);
        state =rowReducer(state,action);
        expect( state.columns['r15']).toEqual(columnOne);
        expect( state.columns['r17']).toEqual(columnTwo);
    } );


});
