import {createAction} from "redux-actions";

export enum actionTypes {
    INCREMENT,
    DECREMENT
}

const incrementAction = createAction<void>(
    actionTypes.INCREMENT.toString(),
    () => {
    }
);

const decrementAction = createAction<void>(
    actionTypes.INCREMENT.toString(),
    () => {
    }
);

export default {
    incrementAction,
    decrementAction
}