import * as React from "react";

import {connect, Dispatch} from "react-redux";

import Counter from "./Counter";
import {IRootState} from "../../rootReducer";
import actions, {CounterAction} from "../actions/actions";

export interface HelloProps {
    counter: number,
    incrementAction: CounterAction,
    decrementAction: CounterAction
}

export class Hello extends React.Component<HelloProps, IRootState> {
    constructor(props: HelloProps) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.incrementAction();
    }

    decrement() {
        this.props.decrementAction();
    }

    render() {
        return <div>
            <h1>Hello typescript and react!</h1>
            <Counter
                counter={this.props.counter}
                decrement={this.decrement}
                increment={this.increment}
            />
        </div>;
    }
}

export const mapStateToProps = (state: IRootState) => {
    return state.counters;
};

export const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        incrementAction: () => { dispatch(actions.incrementAction()) },
        decrementAction: () => { dispatch(actions.decrementAction()) }
    }
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Hello)