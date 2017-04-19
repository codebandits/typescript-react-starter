import {actionTypes, default as actions} from "../actions";

describe("incrementAction", () => {
    it("returns action of type increment", () => {
        let action = {
            type: actionTypes.INCREMENT.toString()
        };
        expect(actions.incrementAction()).toEqual(action);
    });
});

describe("decrementAction", () => {
    it("returns action of type decrement", () => {
        let action = {
            type: actionTypes.DECREMENT.toString()
        };
        expect(actions.decrementAction()).toEqual(action);
    });
});