import * as React from "react";
import {shallow} from "enzyme";

import Counter from "../Counter";

describe("counter container", () => {
    let subject: any,
        mockIncrement: () => {},
        mockDecrement: () => {};
    beforeEach(() => {
        mockIncrement = jest.fn();
        mockDecrement = jest.fn();
        subject = shallow(<Counter increment={mockIncrement} decrement={mockDecrement} counter={1}/>);
    });

    it("it shows the counter", () => {
        expect(subject.text()).toContain("1");
    });

    it("clicking on the increment button call property increment", () => {
        subject.find("#increment").props().onClick();

        expect(mockIncrement).toBeCalled();
    });

    it("clicking on the decrement button call property decrement", () => {
        subject.find("#decrement").props().onClick();

        expect(mockDecrement).toBeCalled();
    });
});