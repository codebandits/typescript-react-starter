import {Api, Greeting} from "../api/Api";
import {ThunkAction} from "redux-thunk";
import {Dispatch} from "react-redux";

export enum CounterEnum {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    RECEIVE_GREETING = "RECEIVE_GREETING",
}

export type CounterType = {
    type: CounterEnum
    payload?: Greeting | undefined
}

export type CounterAction = (payload?: Greeting | undefined) => CounterType

export const incrementAction: CounterAction = () => {
    return {type: CounterEnum.INCREMENT}
};

export const decrementAction: CounterAction = () => {
    return {type: CounterEnum.DECREMENT}
};

const greetingReceivedAction: CounterAction = (greeting: Greeting) => {
    return {type: CounterEnum.RECEIVE_GREETING, payload: greeting}
};

export const getGreetingAction: () => ThunkAction<Promise<void>, CounterType, any>
    = (): ThunkAction<Promise<void>, CounterType, any> => {
    return (dispatch: Dispatch<CounterType>) => {
        return Api.getGreeting()
            .then((greeting: Greeting) => {
                dispatch(greetingReceivedAction(greeting));
            })
            .catch(() => {
                dispatch(greetingReceivedAction(
                    new Greeting("Create a greeting endpoint " +
                        "for a custom greeting"))
                );
            });
    }
};

export default {
    decrementAction,
    incrementAction,
    getGreetingAction,
}