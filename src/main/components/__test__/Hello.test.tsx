import {Greeting} from "../../api/Api";
jest.mock("../../actions/actions");

import DefaultState from "../../interfaces/defaultState";
import * as React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import {Dispatch} from "react-redux";
import {Hello, HelloProps, mapDispatchToProps, mapStateToProps} from "../Hello";
import Counter from "../Counter";
import {IRootState} from "../../../rootReducer";
import {EnzymePropSelector} from "enzyme";
import Actions, {CounterAction, decrementAction, getGreetingAction, incrementAction} from "../../actions/actions";

const mockDecrementAction: jest.Mock<CounterAction> = decrementAction as any;
const mockIncrementAction: jest.Mock<CounterAction> = incrementAction as any;
const mockGetGreetingAction: jest.Mock<any> = getGreetingAction as any;

describe("Hello Component", () => {
    let helloComponent: ShallowWrapper<Hello, DefaultState>;
    let props: HelloProps;
    let counter: number;
    let counterProps: EnzymePropSelector;

    beforeEach(() => {
        props = {
            counter: 2,
            greetingState: new Greeting("hello"),
            incrementAction: incrementAction,
            decrementAction: decrementAction,
            getGreetingAction: getGreetingAction

        } as HelloProps;

        helloComponent = shallow(
            <Hello
            incrementAction={props.incrementAction}
            decrementAction={props.decrementAction}
            getGreetingAction={props.getGreetingAction}
            counter={props.counter}
            greetingState={props.greetingState}/>);

        counterProps = helloComponent.find(Counter).props()
    });

    it("says hello", () => {
        expect(helloComponent.find("h1").text()).toContain("hello");
    });

    it("gets the greeting on mount", function () {
        expect(getGreetingAction).toHaveBeenCalled();
    });


    describe("Counter component", () => {
        it("shows the counter component", () => {
            expect(helloComponent.find(Counter).length).toEqual(1);
        });

        it("passes counter property", () => {
            expect(counterProps.counter).toEqual(2);
        });

        it("passes functions of increment the counter", () => {
            counterProps.increment();

            expect(incrementAction).toBeCalled();
        });

        it("passes functions of decrement the counter", () => {
            counterProps.decrement();

            expect(decrementAction).toBeCalled();
        });
    });

    describe("mapStateToProps", () => {
        it("maps the counter from the state", () => {
            const state: IRootState = {
                counters: { counter: 1 } as any
            };

            let props: any = mapStateToProps(state);

            expect(props.counter).toBe(1);
        });
    });

    describe("mapDispatchToProps", () => {
        it("maps action functions to decrement the counter", () => {
            mockDecrementAction.mockReturnValue("you are going down, sorry!");
            let dispatch: Dispatch<{}> = jest.fn();

            let props = mapDispatchToProps(dispatch);
            props.decrementAction();

            expect(decrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going down, sorry!");
        });

        it("maps action functions to increment the counter", () => {
            mockIncrementAction.mockReturnValue("you are going up, congratulations!");
            let dispatch: Dispatch<{}> = jest.fn();

            let props = mapDispatchToProps(dispatch);
            props.incrementAction();

            expect(incrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going up, congratulations!");
        });

        it("maps action functions to get greeting function", () => {
            mockGetGreetingAction.mockReturnValue(new Greeting("hello"));
            let dispatch: Dispatch<{}> = jest.fn();

            let props = mapDispatchToProps(dispatch);
            props.getGreetingAction();

            expect(getGreetingAction).toBeCalled();
            expect(dispatch).toBeCalledWith(new Greeting("hello"));
        });
    });
});