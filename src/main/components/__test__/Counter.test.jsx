"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Counter_1 = require("../Counter");
var enzyme_1 = require("enzyme");
describe("counter container", function () {
    var subject, mockIncrement, mockDecrement;
    var incrementButtonProps;
    var decrementButtonProps;
    beforeEach(function () {
        mockIncrement = jest.fn();
        mockDecrement = jest.fn();
        subject = enzyme_1.shallow(<Counter_1.default increment={mockIncrement} decrement={mockDecrement} counter={1}/>);
        incrementButtonProps = subject.find("#increment").props();
        decrementButtonProps = subject.find("#decrement").props();
    });
    it("it shows the counter", function () {
        expect(subject.text()).toContain("1");
    });
    it("clicking on the increment button call property increment", function () {
        incrementButtonProps.onClick();
        expect(mockIncrement).toBeCalled();
    });
    it("clicking on the decrement button call property decrement", function () {
        decrementButtonProps.onClick();
        expect(mockDecrement).toBeCalled();
    });
});
