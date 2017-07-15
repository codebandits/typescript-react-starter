"use strict";
var React = require("react");
var Counter = function (props) {
    var counter = props.counter, increment = props.increment, decrement = props.decrement;
    return (<div>
            <p>Counter: {counter}</p>
            <button onClick={increment} id="increment">INCREMENT</button>
            <button onClick={decrement} id="decrement">DECREMENT</button>
        </div>);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Counter;
