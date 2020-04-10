import React from "react";
import UserItem from "./UserItem";
import {graphql, createFragmentContainer} from "react-relay";
import {User} from "../utils/types";

const UserList: React.FC<{ users: User[] }> = ({users}) => {
    return <div>
        {users.map((user: User) => (
            <UserItem key={user.id} user={user}/>
        ))}
    </div>
};

export default createFragmentContainer(UserList, {
    users: graphql`
        fragment UserList_users on UserType @relay (plural: true) {
            ...UserItem_user
        }
    `
})

