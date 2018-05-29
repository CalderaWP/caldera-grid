import React from 'react';
import renderer from 'react-test-renderer';
import {chooseColumnBox, Column} from "./Column";
import {Box} from "./Box";
import {DisplayBox} from "./DisplayBox";
import {EditBox} from "./EditBox";

describe('Chooses boxes correctly', () => {

    it( 'chooses the right existent box',  () => {
        const props = {content:'hi'};
        const boxes = {
            editMode: EditBox(props),
            displayMode: DisplayBox(props)
        };

        let chosen = chooseColumnBox('editMode',boxes,'insaneMode' );
        expect(chosen).toEqual(boxes['editMode'])

    });

    it( 'chooses the default box when asked for non-existent box ',  () => {
        const props = {content:'hi'};
        const boxes = {
            otherMode: Box(props),
            editMode: EditBox(props),
            displayMode: DisplayBox(props)
        };

        let chosen = chooseColumnBox('insaneMode',boxes,'editMode' );
        expect(chosen).toEqual(boxes['editMode'])

    });

    it( 'chooses the first box when asked for non-existent box and default box does not exist either',  () => {
        const props = {content:'hi'};
        const boxes = {
            editMode: EditBox(props),
            displayMode: DisplayBox(props)
        };

        let chosen = chooseColumnBox('insaneMode',boxes,'crazyMode' );
        expect(chosen).toEqual(boxes['editMode'])

    });

});


describe('Outputs the right box', () => {

    it( 'Renders the right existent box',  () => {
        const boxProps = {content:'hi'};
        const boxes = {
            editMode: EditBox(boxProps),
            displayMode: DisplayBox(boxProps)
        };

        const component = renderer.create(
            <Column
                content={'Hi Roy'}
                boxes={boxes}
                boxMode={'editMode'}
                defaultMode={'fakeMode'}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    it( 'Renders the default box when asked for non-existent box ',  () => {
        const props = {content:'hi'};
        const boxes = {
            otherMode: Box(props),
            editMode: EditBox(props),
            displayMode: DisplayBox(props)
        };

        const component = renderer.create(
            <Column
                content={'Hi Roy'}
                boxes={boxes}
                boxMode={'depecheMode'}
                defaultMode={'editMode'}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

    it( 'Render the first box when asked for non-existent box and default box does not exist either',  () => {
        const props = {content:'hi'};
        const boxes = {
            editMode: EditBox(props),
            displayMode: DisplayBox(props)
        };

        const component = renderer.create(
            <Column
                content={'Hi Roy'}
                boxes={boxes}
                boxMode={'depecheMode'}
                defaultMode={'fakeMode'}
            />
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

    });

});

