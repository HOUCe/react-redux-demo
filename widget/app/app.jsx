import React from 'react';
import ReactDom from 'react-dom';
import ReduxThunk from 'redux-thunk';
import { Redux } from 'redux';
import { ReactRedux } from 'react-redux';
import $ from 'jquery.js';
const { Provider, connect } = ReactRedux;

import * as action from 'action.es';
import { DemoApp } from 'component.jsx';
import { demoReducer } from 'reducer.jsx';

// 使用redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
let demoStore = Redux.createStore(demoReducer, composeEnhancers(
    Redux.applyMiddleware(ReduxThunk)
))

function mapStateToProps (state) {
    return {
        likedList: state.likeBlockReducer,
        selectList: state.selectListReducer
    }
}

function init (opt) {
    var App = ReactRedux.connect(mapStateToProps)(DemoApp);
    ReactDom.render(
        <Provider store={ demoStore }>
            <App />
        </Provider>,
        $('.demo-app-mount-dom')[0]
    );
}

export { init };