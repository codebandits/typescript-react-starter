"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
jest.mock("../../actions/actions");
var React = require("react");
var enzyme_1 = require("enzyme");
var Hello_1 = require("../Hello");
var Counter_1 = require("../Counter");
var actions_1 = require("../../actions/actions");
describe("Hello Component", function () {
    var helloComponent;
    var props;
    var increment;
    var decrement;
    var counter;
    var counterProps;
    beforeEach(function () {
        increment = jest.fn();
        decrement = jest.fn();
        props = {
            counter: 2,
            actions: {
                incrementAction: increment,
                decrementAction: decrement
            }
        };
        helloComponent = enzyme_1.shallow(<Hello_1.Hello actions={props.actions} counter={props.counter}/>);
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
            expect(increment).toBeCalled();
        });
        it("passes functions of decrement the counter", function () {
            counterProps.decrement();
            expect(decrement).toBeCalled();
        });
    });
    describe("mapStateToProps", function () {
        it("maps the counter from the state", function () {
            var counters = {
                counter: 1
            };
            var state = {
                counters: counters
            };
            var props = Hello_1.mapStateToProps(state);
            expect(props.counter).toBe(1);
        });
    });
    describe("mapDispatchToProps", function () {
        it("maps action functions to decrement the counter", function () {
            actions_1.decrementAction.mockReturnValue("you are going down, sorry!");
            var dispatch = jest.fn();
            var props = Hello_1.mapDispatchToProps(dispatch);
            props.actions.decrementAction();
            expect(actions_1.decrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going down, sorry!");
        });
        it("maps action functions to increment the counter", function () {
            actions_1.incrementAction.mockReturnValue("you are going up, congratulations!");
            var dispatch = jest.fn();
            var props = Hello_1.mapDispatchToProps(dispatch);
            props.actions.incrementAction();
            expect(actions_1.incrementAction).toBeCalled();
            expect(dispatch).toBeCalledWith("you are going up, congratulations!");
        });
    });
});
