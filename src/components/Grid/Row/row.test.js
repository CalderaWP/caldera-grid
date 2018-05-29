import React from 'react';
import renderer from 'react-test-renderer';
import {Row} from "./index";

describe( 'Rows work with columns',  () => {
    it('Works with one column', () => {
        const component = renderer.create(
            <Row
                columns={
                    {
                        'c1': {
                            content: 'HiRoy',
                            uuid: 'c1'
                        }

                    }
                }
                mode={'editMode'}
                onUpdate={() =>{}}

            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Works with two columns', () => {
        const component = renderer.create(
            <Row
                columns={
                    {
                        'c1': {
                            content: 'HiRoy',
                            uuid: 'c1'
                        },
                        'c2': {
                            content: 'HiMike',
                            uuid: 'c2'
                        }
                    }
                }
                mode={'editMode'}

                onUpdate={() =>{}}

            />

        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });



})
