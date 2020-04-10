import React from "react";
import UserItem from "./UserItem";
import {graphql, createFragmentContainer} from "react-relay";

const UserList: React.FC<any> = (props) => {
    // const userToRender: { id: number, name: string }[] = [{id: 1, name: "name 1"}, {id: 2, name: "name 2"}];
    return <div>
        {props.usersList.map((user: any) => <UserItem key={user.id} user={user}/>)}
    </div>
};

export default createFragmentContainer(UserList, {
    usersList: graphql`
        fragment UserList_userList on Query {
            users {
                ...UserItem_user
            }
        }
    `
})

