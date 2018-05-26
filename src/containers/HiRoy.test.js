import React from 'react';
import {HiRoy } from "./HiRoy";
import renderer from 'react-test-renderer';

test('Test with message ', () => {
    const component = renderer.create(
        <HiRoy
            thing={'Hi Roy'}
            idAttr={'thing-chooser'}
            label={'Change Thing'}
            onChange={(event) => {}}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

