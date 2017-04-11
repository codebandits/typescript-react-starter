import * as React from "react";

export interface HelloProps {}

export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello typescript and react!</h1>;
    }
}