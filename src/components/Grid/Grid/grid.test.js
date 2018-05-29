import React from 'react';
import renderer from 'react-test-renderer';
import {Grid} from "./index";

test('Works with one row', () => {
    const component = renderer.create(
        <Grid
            rows={
                {
                    1: {
                        content: 'HiRoy',
                        uuid: '1'
                    }

                }
            }
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
                    1: {
                        content: 'HiRoy',
                        uuid: '1'
                    },
                    2: {
                        content: 'HiMike',
                        uuid: '2'
                    }
                }
            }

        />

    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
