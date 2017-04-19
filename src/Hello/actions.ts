import {createAction} from "redux-actions";

export enum actionTypes {
    INCREMENT,
    DECREMENT
}

export const incrementAction = createAction<void>(
    actionTypes.INCREMENT.toString(),
    () => {
    }
);

export const decrementAction = createAction<void>(
    actionTypes.DECREMENT.toString(),
    () => {
    }
);

export default {
    decrementAction,
    incrementAction
}