import React from "react";
import {QueryRenderer, graphql} from "react-relay";
import environment from "../Enviroment";
import UserList from "./UserList";

const UserListPageQuery = graphql`
    query UserListPageQuery {
        ...UserList_userList
    }
`;

const UserListPage: React.FC = () => (
    <QueryRenderer
        environment={environment}
        query={UserListPageQuery}
        render={({error, props}) => {
            if (error) {
                return <div>{error?.message}</div>
            } else if (props) {
                return <UserList/>
            }
            return <div>Loading</div>
        }}
        variables={{}}
    />
);

export default UserListPage;