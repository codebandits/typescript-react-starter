import * as React from "react";
import Counter from "../Counter";
import {EnzymePropSelector, shallow, ShallowWrapper} from "enzyme";
import {Hello} from "../Hello";
import {IRootState} from "../../../rootReducer";
import {CounterAction} from "../../actions/actions";

describe("counter container", () => {
    let subject: ShallowWrapper<Hello, IRootState>,
        mockIncrement: () => CounterAction,
        mockDecrement: () => CounterAction;

    let incrementButtonProps: EnzymePropSelector;
    let decrementButtonProps: EnzymePropSelector;

    beforeEach(() => {
        mockIncrement = jest.fn();
        mockDecrement = jest.fn();
        subject = shallow(<Counter increment={mockIncrement} decrement={mockDecrement} counter={1}/>);

        incrementButtonProps = subject.find("#increment").props();
        decrementButtonProps = subject.find("#decrement").props();

    });

    it("it shows the counter", () => {
        expect(subject.text()).toContain("1");
    });

    it("clicking on the increment button call property increment", () => {
        incrementButtonProps.onClick();

        expect(mockIncrement).toBeCalled();
    });

    it("clicking on the decrement button call property decrement", () => {
        decrementButtonProps.onClick();

        expect(mockDecrement).toBeCalled();
    });
});