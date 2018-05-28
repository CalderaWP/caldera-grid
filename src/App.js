import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HiRoy} from "./containers/HiRoy";
import { connect } from 'react-redux'
import {getThing} from "./components/Thing/state/selectors";
import {setThing} from "./components/Thing/state/actions";
import {editPropTypes} from "./components/Thing/PropTypes";

export const App = (props) => {

        return (
            <div className="App">
                <header className="App-header">
                    <img
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <HiRoy
                    onChange={(newValue) => {
                        console.log(newValue);
                        props.onChange(newValue);
                    }}
                    idAttr={'thing-chooser'}
                    label={'Choose Thing'}
                    thing={props.thing}
                />
            </div>
        );

};

App.propTypes = {
    onChange: editPropTypes.onChange,
    thing:editPropTypes.thing
};

const mapStateToProps = (state) => {
    return {
        thing: getThing(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (newValue) => {
            dispatch(setThing(newValue))
        }
    }
};



export const AppWrapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
