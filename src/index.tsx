import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider, Store} from 'react-redux';

import configureStore from "./configureStore";
import Hello from "./main/components/Hello";

const store : Store<any> = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById("hello")
);
