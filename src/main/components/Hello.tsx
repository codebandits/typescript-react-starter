import * as React from "react";

import {connect, Dispatch} from "react-redux";
import {bindActionCreators} from "redux";

import Counter from "./Counter";
import {IRootState} from "../../rootReducer";
import actions from "../actions/actions";

export interface HelloProps {
    counter: number,
    actions: typeof actions
}

export class Hello extends React.Component<HelloProps, void> {
    constructor(props: HelloProps) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.props.actions.incrementAction();
    }

    decrement() {
        this.props.actions.decrementAction();
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
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(Hello)