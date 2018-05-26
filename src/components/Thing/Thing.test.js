import React from 'react';
import {Display} from "./Display";
import {Edit} from "./Edit";
import renderer from 'react-test-renderer';

test('Test default', () => {
    const component = renderer.create(
        <Display/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


test('Test with message ', () => {
    const component = renderer.create(
        <Display thing={'Hi Roy'}/>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});


test('Test with message ', () => {
    const component = renderer.create(
        <Edit
            value={'Hi Roy'}
            id={'thing-chooser'}
            label={'Change THing'}
        />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

