import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppWrapped} from "./App";

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {thingReducer} from "./components/Thing/state/reducer";

const store = createStore(thingReducer);
store.subscribe( (a,b) => {
    console.log(a,b);
})
ReactDOM.render(
    <Provider store={store}>
        <AppWrapped />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
