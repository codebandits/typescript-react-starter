import {decrementAction, incrementAction, CounterEnum} from "../actions";

describe("incrementAction", () => {
    it("returns action of type increment", () => {
        let action = {
            type: CounterEnum.INCREMENT
        };

        expect(incrementAction()).toEqual(action);
    });
});

describe("decrementAction", () => {
    it("returns action of type decrement", () => {
        let action = {
            type: CounterEnum.DECREMENT
        };
        expect(decrementAction()).toEqual(action);
    });
});