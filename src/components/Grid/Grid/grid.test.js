import React from 'react';
import renderer from 'react-test-renderer';
import {Grid} from "./index";

test('Works with one row', () => {
    const component = renderer.create(
        <Grid
            rows={
                {
                    'r1': {
                        uuid: 'r1',
                        columns: {
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

                }
            }
            onUpdate={() =>{}}

        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Works with two rows', () => {
    const component = renderer.create(
        <Grid
            rows={
                {
                    'r1': {
                        uuid: 'r1',
                        columns: {
                            'c1': {
                                content: 'HiRoy',
                                uuid: 'c1'
                            },
                            'c2': {
                                content: 'HiMike',
                                uuid: 'c2'
                            }
                        }
                    },
                    'r2': {
                        uuid: 'r2',
                        columns: {
                            'c12': {
                                content: 'HiRoy',
                                uuid: 'c12'
                            },
                            'c22': {
                                content: 'HiMike',
                                uuid: 'c22'
                            }
                        }
                    }
                }
            }
            onUpdate={() =>{}}

        />

    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
