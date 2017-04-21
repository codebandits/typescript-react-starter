import {createAction} from "redux-actions";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DEVREMENT";

export const incrementAction : any = createAction<void>(
    INCREMENT,
    () => {
    }
);

export const decrementAction : any = createAction<void>(
    DECREMENT,
    () => {
    }
);

export default {
    decrementAction,
    incrementAction
}