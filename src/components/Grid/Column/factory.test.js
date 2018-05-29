import React from 'react';
import renderer from 'react-test-renderer';
import {chooseColumnBox, Column} from "./Column";
import {Box} from "./Box";
import {DisplayBox} from "./DisplayBox";
import {EditBox} from "./EditBox";
import {
    prepareColumn,
    prepareRow
} from "./factory";

describe('Prepares columns correctly', () => {

    it( 'Prepares the column',  () => {
        const column = {content:'hi'};
        const boxes = {
            editMode: EditBox(column),
            displayMode: DisplayBox(column)
        };

        const prepared = prepareColumn(column);
        expect(prepared.boxes).toEqual(boxes)

    });

    it( 'Prepares a row of columns',  () => {
         const row = {
             columns: {
                 'c1': {
                     content: 'HiRoy',
                     uuid: 'c1'
                 },
                 'c2': {
                     content: 'HiMike',
                     uuid: 'c2'
                 }
             },
             mode: 'editMode'
         };


        const prepared = prepareRow(row);
        expect(prepared).toMatchSnapshot();

    });



});
