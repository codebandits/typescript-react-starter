import { handleActions, Action } from "redux-actions";
import { actionTypes } from "./actions";
import DefaultState from "./interfaces/defaultState";

const initialState: DefaultState = {
    counter: 0
};

export default handleActions<DefaultState, void>({
    [actionTypes.INCREMENT.toString()]: (state: DefaultState, action: Action<void>): DefaultState => {
        return {
            counter: state.counter + 1
        };
    },
    [actionTypes.DECREMENT.toString()]: (state: DefaultState, action: Action<void>): DefaultState => {
        return {
            counter: state.counter - 1
        };
    },
}, initialState);