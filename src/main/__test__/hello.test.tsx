import * as React from "react";
import {shallow, ShallowWrapper} from "enzyme";
import {Hello} from "../hello";

describe("Hello Component", () => {
    let helloComponent: ShallowWrapper<Hello, any>;

    beforeEach(() => {
        helloComponent = shallow(<Hello/>);
    });

    it("says hello", () => {
        expect(helloComponent.find("h1").text()).toContain("Hello typescript and react!");
    });
});