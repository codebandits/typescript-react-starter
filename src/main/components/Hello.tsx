import * as React from "react";

import {connect, Dispatch} from "react-redux";
import {Action} from "redux";
import {IRootState} from "../../rootReducer";
import actions, {CounterAction, CounterType} from "../actions/actions";
import Counter from "./Counter";
import {Greeting} from "../api/Api";
import {ThunkAction} from "redux-thunk";

export interface HelloProps {
    counter: number,
    greetingState: Greeting,
    incrementAction: CounterAction,
    decrementAction: CounterAction,
    getGreetingAction: () => ThunkAction<Promise<void>, CounterType, null>,
}

interface HelloDispatch {
    incrementAction: () => void,
    decrementAction: () => void,
    getGreetingAction: () => void,
}

export interface HelloState {
    counter: number,
    greetingState: Greeting
}

export class Hello extends React.Component<HelloProps> {
    constructor(props: HelloProps) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    componentWillMount() {
        this.props.getGreetingAction()
    }

    increment() {
        this.props.incrementAction();
    }

    decrement() {
        this.props.decrementAction();
    }

    render() {
        return <div>
            <h1>{this.props.greetingState.greeting}</h1>
            <Counter
                counter={this.props.counter}
                decrement={this.decrement}
                increment={this.increment}
            />
        </div>;
    }
}

export const mapStateToProps = (state: IRootState): HelloState => {
    return state.counters;
};


export const mapDispatchToProps: Dispatch<Action> = (dispatch: Dispatch<Action>): HelloDispatch => {
    return {
        incrementAction: () => {
            dispatch(actions.incrementAction())
        },
        decrementAction: () => {
            dispatch(actions.decrementAction())
        },
        getGreetingAction: () => {
            dispatch(actions.getGreetingAction())
        }
    }
};

export default connect<HelloState, HelloDispatch, {}>(mapStateToProps, mapDispatchToProps)(Hello);