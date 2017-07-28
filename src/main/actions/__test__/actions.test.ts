jest.mock("../../api/Api");
import {ThunkAction} from "redux-thunk";
import {decrementAction, incrementAction, CounterEnum, getGreetingAction, CounterType} from "../actions";
import {Api, Greeting} from "../../api/Api";
import getGreeting = Api.getGreeting;

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

describe("fetch greeting", () => {
    it("gets the greeting from the api", async () => {
        const greetingThunk: ThunkAction<void, CounterType, any> = getGreetingAction();
        let greeting = new Greeting("hello");

        (getGreeting as any)
            .mockReturnValue(Promise.resolve(greeting));
        const dispatch = jest.fn();

        await greetingThunk(dispatch, jest.fn(), null);

        expect(dispatch)
            .toHaveBeenCalledWith({type: "RECEIVE_GREETING", payload: greeting});
        expect(getGreeting).toHaveBeenCalled()
    });

    it("sets the greeting to a default if the greeting is not found", async () => {
        const greetingThunk: ThunkAction<void, CounterType, any> = getGreetingAction();
        let greeting = new Greeting("Create a greeting endpoint for a custom greeting");

        (getGreeting as any)
            .mockReturnValue(Promise.reject(greeting));
        const dispatch = jest.fn();

        await greetingThunk(dispatch, jest.fn(), null);

        expect(dispatch)
            .toHaveBeenCalledWith({type: "RECEIVE_GREETING", payload: greeting});
        expect(getGreeting).toHaveBeenCalled()
    });

});