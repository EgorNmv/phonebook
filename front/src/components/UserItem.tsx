import React from "react";
import {graphql, createFragmentContainer} from "react-relay";
import {User} from "../utils/types";

const UserItem: React.FunctionComponent<{ user: User }> =
    ({user}) => (<div>
            {`${user.firstName} ${user.secondName}`}
        </div>
    );

export default createFragmentContainer(UserItem, {
    user:
    graphql`
        fragment UserItem_user on UserType {
            id,
            firstName,
            secondName,
            post
        }
    `
});
