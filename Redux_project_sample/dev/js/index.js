import 'babel-polyfill'; // make code backwards compatible, i.e. make code compatible with older browsers
import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux'; // here you can directly use createStore as a function, it is same as
                                   // var createStore = redux.createStore;
import allReducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/app';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);
