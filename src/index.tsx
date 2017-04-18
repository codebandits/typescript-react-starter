import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import configureStore from "./configureStore";
import Hello from "./Hello/Hello";

const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById("hello")
);
