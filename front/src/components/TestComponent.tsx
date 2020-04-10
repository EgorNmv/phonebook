import React from "react";
import {QueryRenderer, graphql} from "react-relay";
import environment from "../Enviroment";
import {User} from "../utils/types";

const TestComponentQuery = graphql`
    query TestComponentQuery {
        users {
            id,
            secondName,
            firstName
        }
    }
`;

const TestComponent: React.FC = () => (
    <QueryRenderer
        environment={environment}
        query={TestComponentQuery}
        render={({error, props}: any) => {
            if (error) {
                return <div>Error: {error?.message}</div>
            } else if (props && props.users) {
                console.info("props from TestComponent", props);
                return <div>Success: {props.users.map((user: User) => <div>{user.firstName}</div>)}</div>
            }
            return <div>Loading</div>
        }}
        variables={{}}
    />
);

export default TestComponent;
