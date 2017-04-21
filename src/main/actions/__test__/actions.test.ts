import {decrementAction, INCREMENT, incrementAction, DECREMENT} from "../actions";

describe("incrementAction", () => {
    it("returns action of type increment", () => {
        let action = {
            type: INCREMENT
        };
        expect(incrementAction()).toEqual(action);
    });
});

describe("decrementAction", () => {
    it("returns action of type decrement", () => {
        let action = {
            type: DECREMENT
        };
        expect(decrementAction()).toEqual(action);
    });
});