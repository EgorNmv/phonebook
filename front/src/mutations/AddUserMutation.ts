import {commitMutation, graphql} from "react-relay";
import {ConnectionHandler} from "relay-runtime";
import environment from "../Enviroment";

const mutation = graphql`
    mutation AddUserMutation($input:AddUserInput!){
        addUser(user: $input){
            id,
            firstName,
            secondName,
            phone,
            cabinet,
            post,
            internalPhone
        }
    }
`;

export default (user: any, callback: Function) => {
    const variables = {
        input: {
            ...user
        }
    }

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: (response: any, error) => {
            const userId = response.addUser.id;
            callback(userId);
        },
        onError: error => console.error(error)
    });
}