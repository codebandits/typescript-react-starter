import { combineReducers } from "redux";

import helloReducer from "./Hello/reducer";
import helloActions from "./Hello/actions";

export interface IRootState {
    counters: typeof helloActions
}

export default combineReducers({
    counters: helloReducer
});