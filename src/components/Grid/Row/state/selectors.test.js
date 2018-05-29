import {
    getRowMode,
    getColumns
} from "./selectors";
import {defaultMode} from "../../Column/factory";

describe('row selectors', () => {
    const state = {
        rows: {
            'r21': {
                uuid: 'r21',
                columns: {
                    'c1': {
                        content: 'HiRoy',
                        uuid: 'c1'
                    },
                    'c2': {
                        content: 'HiMike',
                        uuid: 'c2'
                    },
                },
                mode:'editMode'
            },
            'r212': {
                uuid: 'r212',
                columns: {
                    'c1': {
                        content: 'HiRoy',
                        uuid: 'c1'
                    },
                    'c2': {
                        content: 'HiMike',
                        uuid: 'c2'
                    },
                },
            }
        }
    };
    describe('get row mode', () => {
        it( 'gets the right mode', () => {
           expect(getRowMode(state,'r21')).toEqual('editMode')
        });

        it( 'gets the default mode', () => {
            expect(getRowMode(state,'r212')).toEqual(defaultMode)
        });

    });


    describe('get columns', () => {

        it('Can get the column from state', () => {
            expect(getColumns(state,'r21')).toEqual(state.rows['r21'].columns);
        });





    });
});