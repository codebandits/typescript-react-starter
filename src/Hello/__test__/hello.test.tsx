import * as React from "react";
// import * as TypeMoq from "typemoq";

import {shallow, ShallowWrapper} from "enzyme";
import {Hello, HelloProps} from "../Hello";

describe("Hello Component", () => {
    let helloComponent: ShallowWrapper<Hello, any>;
    // let props: TypeMoq.IMock<HelloProps> = TypeMoq.Mock.ofType<HelloProps>();

    beforeEach(() => {
        // helloComponent = shallow(<Hello actions={props.actions} counter={props.counter} />);
    });

    it("says hello", () => {
        // expect(helloComponent.find("h1").text()).toContain("Hello typescript and react!");
    });
});