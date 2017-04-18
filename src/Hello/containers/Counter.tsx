import * as React from 'react';
import DefaultState from "../interfaces/defaultState"

export interface IProps extends DefaultState {
    increment(): void;
    decrement(): void;
}

const Counter = (props: IProps) => {
    const { counter, increment, decrement } = props;

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment} label="Increment" />
            <button onClick={decrement} label="Decrement" />
        </div>
    );
};

export default Counter;