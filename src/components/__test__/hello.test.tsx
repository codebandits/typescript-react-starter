import * as React from "react";
import {shallow} from "enzyme";
import {Hello} from "../hello";

describe("Hello Component", () => {
    let helloComponent: any;
    beforeEach(() => {
        helloComponent = shallow(<Hello/>);
    });

    it("says hello", () => {
        expect(helloComponent.find("h1").text()).toContain("Hello typescript and react!");
    });
});