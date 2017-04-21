import { handleActions, Action } from "redux-actions";
import DefaultState from "./interfaces/defaultState";
import {DECREMENT, INCREMENT} from "./actions/actions";

const initialState: DefaultState = {
    counter: 0
};

export default handleActions<DefaultState, void>({
    [INCREMENT]: (state: DefaultState, action: Action<void>): DefaultState => {
        return {
            counter: state.counter + 1
        };
    },
    [DECREMENT]: (state: DefaultState, action: Action<void>): DefaultState => {
        return {
            counter: state.counter - 1
        };
    },
}, initialState);