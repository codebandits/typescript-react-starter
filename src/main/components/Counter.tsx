import * as React from 'react';
import DefaultState from "../interfaces/defaultState"
import {StatelessComponent} from "react";


export interface CounterProps extends DefaultState {
    increment(): void;
    decrement(): void;
}

const Counter: StatelessComponent<CounterProps> = (props: CounterProps) => {
    const {counter, increment, decrement} = props;

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment} id="increment">INCREMENT</button>
            <button onClick={decrement} id="decrement">DECREMENT</button>
        </div>
    );
};

export default Counter;