import React from "react";

const DefaultComponent = ({text}: {text: string}) => (
    <span>DefaultComponent {text}</span>
)

export const Component2 = ({text}: {text: string}) => (
    <span>Component2 {text}</span>
)
export default DefaultComponent;