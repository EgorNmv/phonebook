import React from "react";
import {graphql, createFragmentContainer} from "react-relay";

const UserItem: React.FunctionComponent<{ user: any }> =
    (props) => (
        <div>
            {props.user.firstName}
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
