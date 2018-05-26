import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Edit} from "./components/Thing/Edit";
import {Display} from "./components/Thing/Display";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thing: 'Hi Roy'
        }
        this.changeThing = this.changeThing.bind(this);
    }

    changeThing(newValue) {
        this.setState({thing: newValue})
    }

    render() {
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
                <div>
                    <Edit
                        onChange={this.changeThing}
                        idAttr={'thing-chooser'}
                        label={'Choose Thing'}
                        value={this.state.thing}
                    />
                    <div>
                        <Display
                            thing={this.state.thing}
                        />
                    </div>
                </div>
            </div>

        );
    }
}

export default App;
