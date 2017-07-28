import {combineReducers} from "redux";

import helloReducer from "./main/reducers/reducer";
import {HelloState} from "./main/components/Hello";

export interface IRootState {
    counters: HelloState
}

export default combineReducers({
    counters: helloReducer
});