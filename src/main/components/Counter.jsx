"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Counter = function (props) {
    var counter = props.counter, increment = props.increment, decrement = props.decrement;
    return (<div>
            <p>Counter: {counter}</p>
            <button onClick={increment} label="Increment" id="increment"/>
            <button onClick={decrement} label="Decrement" id="decrement"/>
        </div>);
};
exports.default = Counter;
