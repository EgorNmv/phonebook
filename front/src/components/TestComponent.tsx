import React from "react";

export const TestComponent: React.FC<any> = (props) => {
    console.info(props);
    return (<div>
        TestComponent
    </div>)
};