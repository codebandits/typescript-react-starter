import * as React from 'react';
import DefaultState from "../interfaces/defaultState"

export interface CounterProps extends DefaultState {
    increment(): void;
    decrement(): void;
}

const Counter: any = (props: CounterProps) => {
    const {counter, increment, decrement} = props;

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment} label="Increment" id="increment"/>
            <button onClick={decrement} label="Decrement" id="decrement"/>
        </div>
    );
};

export default Counter;