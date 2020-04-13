import {commitMutation, graphql} from "react-relay";
import {ConnectionHandler} from "relay-runtime";
import environment from "../Enviroment";
import {User} from "../utils/types";

const mutation = graphql`
    mutation UpdateUserMutation(
        $id: ID!,
        $firstName: String,
        $secondName: String,
        $phone: Float,
        $cabinet: Int,
        $post: String,
        $internalPhone: Int
    ){
        updateUser(
            id: $id,
            firstName: $firstName,
            secondName: $secondName,
            phone: $phone,
            cabinet: $cabinet,
            post: $post,
            internalPhone: $internalPhone){
            id
            firstName
            secondName
            phone
            cabinet
            post
            internalPhone
        }
    }
`;

export default (user: User, callback: Function) => {
    console.info(typeof user.id);
    console.info(typeof user.firstName);
    console.info(typeof user.secondName);
    console.info(typeof user.phone, user.phone);
    console.info(typeof user.cabinet, user.cabinet);
    console.info(typeof user.post);
    const variables = {
        id: Number(user.id),
        firstName: user.firstName,
        secondName: user.secondName,
        phone: Number(user.phone),
        cabinet: Number(user.cabinet),
        post: user.post,
        internalPhone: user.internalPhone
    }

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response: any) => {
            const userFromResponse = response.updateUser;
            callback(userFromResponse);
        },
        onError: error => console.error(error)
    });
}