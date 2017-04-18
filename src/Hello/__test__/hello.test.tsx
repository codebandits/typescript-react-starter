import * as React from "react";

import {shallow, ShallowWrapper} from "enzyme";
import {Hello, HelloProps} from "../Hello";

describe("Hello Component", () => {
    let helloComponent: ShallowWrapper<Hello, any>;
    let props: HelloProps;

    beforeEach(() => {
        props = {
            counter: 2
        } as HelloProps;
        helloComponent = shallow(<Hello actions={props.actions} counter={props.counter} />);
    });

    it("says hello", () => {
        expect(helloComponent.find("h1").text()).toContain("Hello typescript and react!");
    });
});