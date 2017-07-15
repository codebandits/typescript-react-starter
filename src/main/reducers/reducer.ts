import { handleActions, Action } from "redux-actions";
import DefaultState from "../interfaces/defaultState";
import {CounterEnum} from "../actions/actions";
import {Greeting} from "../api/Api";

const initialState: DefaultState = {
    counter: 0,
    greetingState: new Greeting(""),
};

export default handleActions<DefaultState, void>({
    [CounterEnum.INCREMENT]: (state: DefaultState, action: Action<void>): DefaultState => {
        return Object.assign({}, state, {counter: state.counter + 1})
    },
    [CounterEnum.DECREMENT]: (state: DefaultState, action: Action<void>): DefaultState => {
        return Object.assign({}, state, {counter: state.counter - 1})
    },
    [CounterEnum.RECEIVE_GREETING]: (state: DefaultState, action: Action<void>): DefaultState => {
        return Object.assign({}, state, {greetingState: action.payload})
    },
}, initialState);