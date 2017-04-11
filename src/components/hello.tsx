import * as React from "react";

export interface HelloProps {}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Hello extends React.Component<HelloProps, undefined> {
    render() {
        return <h1>Hello typescript and react!</h1>;
    }
}