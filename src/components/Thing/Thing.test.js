import React from 'react';
import {Display} from "./Display";
import {Edit} from "./Edit";
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

class InputBox extends React.Component {
    onSearch(event) {
        event.preventDefault();
        this.props.onSearch(event.target.value.trim());
    }
    render () { return <input onChange={this.onSearch.bind(this)} />; }
}

it('should call onChange prop', () => {
    const newValue = 'Mike R3S Corkum';
    const onChangeMock = jest.fn();
    const event = {
        preventDefault() {},
        target: { value: newValue }
    };
    const idAttr = 'thing-chooser';
    const component = mount(<Edit
        onChange={onChangeMock}
        idAttr={idAttr}
        label={'Choose Thing'}
        thing={'A'}
    />);

    expect(component.prop('idAttr')).toBe(idAttr);
    expect(component.prop('thing')).toBe('A');

    component.find('input').simulate('change', event);
    expect(onChangeMock).toBeCalledWith(newValue);
    component.setProps({ thing: newValue });
    expect(component.prop('thing')).toBe(newValue);
});


configure({ adapter: new Adapter() });
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
            thing={'Hi Roy'}
            idAttr={'thing-chooser'}
            label={'Change Thing'}
            onChange={(event) => {}}
        />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

