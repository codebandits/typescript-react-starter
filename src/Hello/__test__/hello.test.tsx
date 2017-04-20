import DefaultState from "../interfaces/defaultState";
jest.mock("../actions");

import * as React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import {Dispatch} from "react-redux";
import { ActionFunction0, Action } from "redux-actions";

import {Hello, HelloProps, mapDispatchToProps, mapStateToProps} from "../Hello";
import Counter from "../containers/Counter";
import {IRootState} from "../../rootReducer";
import {incrementAction, decrementAction} from "../actions";

describe("Hello Component", () => {
    let helloComponent: ShallowWrapper<Hello, DefaultState>;
    let props: HelloProps;
    let increment: ActionFunction0<Action<void>>;
    let decrement: ActionFunction0<Action<void>>;

    beforeEach(() => {
        increment = jest.fn();
        decrement = jest.fn();
        props = {
            counter: 2,
            actions: {
                incrementAction: increment,
                decrementAction: decrement
            }
        } as HelloProps;

        helloComponent = shallow(<Hello actions={props.actions} counter={props.counter} />);
    });

    it("says hello", () => {
        expect(helloComponent.find("h1").text()).toContain("Hello typescript and react!");
    });

    describe("Counter component", () => {
        it("shows the counter component", () => {
            expect(helloComponent.find(Counter).length).toEqual(1);
        });

        it("passes counter property", () => {
            expect(helloComponent.find(Counter).props().counter).toEqual(2);
        });

        it("passes functions of increment the counter", () => {
            helloComponent.find(Counter).props().increment();
            expect(increment).toBeCalled();
        });

        it("passes functions of decrement the counter", () => {
            helloComponent.find(Counter).props().decrement();
            expect(decrement).toBeCalled();
        });
    });

    describe("mapStateToProps", () => {
        it("maps the counter from the state", () => {
            const counters: any = {
                counter: 1
            };

            const state: IRootState = {
                counters: counters
            };

            let props : any = mapStateToProps(state);

            expect(props.counter).toBe(1);
        });
    });

    describe("mapDispatchToProps", () => {
        it("maps action functions to decrement the counter", () => {
            decrementAction.mockReturnValue("you are going down, sorry!");
            let dispatch: Dispatch<{}> = jest.fn();

            let props = mapDispatchToProps(dispatch);
            props.actions.decrementAction();

            expect(decrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going down, sorry!");
        });

        it("maps action functions to increment the counter", () => {
            incrementAction.mockReturnValue("you are going up, congratulations!");
            let dispatch: Dispatch<{}> = jest.fn();

            let props = mapDispatchToProps(dispatch);
            props.actions.incrementAction();

            expect(incrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going up, congratulations!");
        });
    });
});