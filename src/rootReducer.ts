import { combineReducers } from "redux";

import helloReducer from "./main/reducers/reducer";
import helloActions from "./main/actions/actions";

export interface IRootState {
    counters: typeof helloActions
}

export default combineReducers({
    counters: helloReducer
});