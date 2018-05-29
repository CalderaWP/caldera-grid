import React from 'react';
import renderer from 'react-test-renderer';
import {Column} from "./Column";
import {EditBox} from "./EditBox";


describe( 'Columns work with boxes', () => {
    it('Works with one box', () => {
        const props = {content:'hi'};
        const boxes = {
            editMode: EditBox(props),
        };
        const componentOne = renderer.create(
            <Column
                content={'Hi Roy'}
                boxes={boxes}
                boxMode={'editMode'}
                defaultMode={'editMode'}
            />
        );
        let treeOne = componentOne.toJSON();
        expect(treeOne).toMatchSnapshot();
    });


    it('Falls back to default correctly', () => {
        const props = {content:'hi'};
        const boxes = {
            editMode: EditBox(props),
        };
        const componentOne = renderer.create(
            <Column
                content={'Hi Roy'}
                boxes={boxes}
                boxMode={'defaultMode'}
                defaultMode={'editMode'}
            />
        );

        let treeOne = componentOne.toJSON();
        expect(treeOne).toMatchSnapshot();

        const componentTwo = renderer.create(
            <Column
                content={'Hi Roy'}
                boxes={boxes}
                boxMode={'editMode'}
                defaultMode={'editMode'}
            />
        );
        let treeTwo = componentTwo.toJSON();
        expect(treeTwo).toMatchSnapshot();
        expect(treeOne).toEqual(treeTwo);
    });



});
