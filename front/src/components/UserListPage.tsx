import React from "react";
import {QueryRenderer, graphql} from "react-relay";
import environment from "../Enviroment";
import UserList from "./UserList";

const UserListPageQuery = graphql`
    query UserListPageQuery {
        users{
            ...UserList_users
        }
    }
`;

const UserListPage: React.FC = () => (
    <QueryRenderer
        environment={environment}
        query={UserListPageQuery}
        render={({error, props}: any) => {
            if (error) {
                return <div>Error: {error?.message}</div>
            } else if (props) {
                return <UserList users={props.users}/>
            }
            return <div>Loading</div>
        }}
        variables={{}}
    />
);

export default UserListPage;