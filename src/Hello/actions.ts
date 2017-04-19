import {createAction} from "redux-actions";

export enum actionTypes {
    INCREMENT,
    DECREMENT
}

export const incrementAction : any = createAction<void>(
    actionTypes.INCREMENT.toString(),
    () => {
    }
);

export const decrementAction : any = createAction<void>(
    actionTypes.DECREMENT.toString(),
    () => {
    }
);

export default {
    decrementAction,
    incrementAction
}