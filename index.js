/**
 * @format
 */

import React from 'react';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './store/reducers/';

const enhancer = compose(
    applyMiddleware(thunk),
    // __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
    reducers,
    enhancer,
)

const index = () =>(
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => index);
