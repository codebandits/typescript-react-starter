import { handleActions, Action } from "redux-actions";
import DefaultState from "./interfaces/defaultState";
import {CounterEnum} from "./actions/actions";

const initialState: DefaultState = {
    counter: 0
};

export default handleActions<DefaultState, void>({
    [CounterEnum.INCREMENT]: (state: DefaultState, action: Action<void>): DefaultState => {
        return {
            counter: state.counter + 1
        };
    },
    [CounterEnum.DECREMENT]: (state: DefaultState, action: Action<void>): DefaultState => {
        return {
            counter: state.counter - 1
        };
    },
}, initialState);