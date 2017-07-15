"use strict";
jest.mock("../../actions/actions");
var React = require("react");
var enzyme_1 = require("enzyme");
var Hello_1 = require("../Hello");
var Counter_1 = require("../Counter");
var actions_1 = require("../../actions/actions");
var mockDecrementAction = actions_1.decrementAction;
var mockIncrementAction = actions_1.incrementAction;
describe("Hello Component", function () {
    var helloComponent;
    var props;
    var counter;
    var counterProps;
    beforeEach(function () {
        props = {
            counter: 2,
            incrementAction: actions_1.incrementAction,
            decrementAction: actions_1.decrementAction
        };
        helloComponent = enzyme_1.shallow(<Hello_1.Hello incrementAction={props.incrementAction} decrementAction={props.decrementAction} counter={props.counter}/>);
        counterProps = helloComponent.find(Counter_1.default).props();
    });
    it("says hello", function () {
        expect(helloComponent.find("h1").text()).toContain("Hello typescript and react!");
    });
    describe("Counter component", function () {
        it("shows the counter component", function () {
            expect(helloComponent.find(Counter_1.default).length).toEqual(1);
        });
        it("passes counter property", function () {
            expect(counterProps.counter).toEqual(2);
        });
        it("passes functions of increment the counter", function () {
            counterProps.increment();
            expect(actions_1.incrementAction).toBeCalled();
        });
        it("passes functions of decrement the counter", function () {
            counterProps.decrement();
            expect(actions_1.decrementAction).toBeCalled();
        });
    });
    describe("mapStateToProps", function () {
        it("maps the counter from the state", function () {
            var state = {
                counters: { counter: 1 }
            };
            var props = Hello_1.mapStateToProps(state);
            expect(props.counter).toBe(1);
        });
    });
    describe("mapDispatchToProps", function () {
        it("maps action functions to decrement the counter", function () {
            mockDecrementAction.mockReturnValue("you are going down, sorry!");
            var dispatch = jest.fn();
            var props = Hello_1.mapDispatchToProps(dispatch);
            props.decrementAction();
            expect(actions_1.decrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going down, sorry!");
        });
        it("maps action functions to increment the counter", function () {
            mockIncrementAction.mockReturnValue("you are going up, congratulations!");
            var dispatch = jest.fn();
            var props = Hello_1.mapDispatchToProps(dispatch);
            props.incrementAction();
            expect(actions_1.incrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going up, congratulations!");
        });
    });
});
