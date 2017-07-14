export enum CounterEnum {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT"
}

type Counter = {
    type: CounterEnum
}

export type CounterAction = () => Counter

export const incrementAction :  CounterAction = () => {
    return { type: CounterEnum.INCREMENT }
};

export const decrementAction : CounterAction = () => {
   return { type: CounterEnum.DECREMENT }
};

export default {
    decrementAction,
    incrementAction
}