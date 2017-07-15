import {Greeting} from "../../api/Api";
import fireAction from "../../../../testUtils/fireAction";
import {CounterEnum} from "../../actions/actions";
import reducer from "../reducer";

describe("reducer", function () {
    it("has no side effects", function () {
        const state = fireAction(reducer, {greeting: new Greeting("hello")}, "SOME_RANDOM_ACTION");

        expect(state.greeting).toEqual(new Greeting("hello"));
    });

    it("maps the greeting", function () {
        const greeting: Greeting = new Greeting(
            "hello",
        );
        const state = fireAction(reducer, {}, CounterEnum.RECEIVE_GREETING, greeting);
        expect(state.greetingState).toEqual(new Greeting("hello"));
    });

    it("maps increment", function () {
        const state = fireAction(reducer, {counter: 1}, CounterEnum.INCREMENT);
        expect(state.counter).toEqual(2);
    });

    it("maps decrement", function () {
        const state = fireAction(reducer, {counter: 2}, CounterEnum.DECREMENT);
        expect(state.counter).toEqual(1);
    });

});