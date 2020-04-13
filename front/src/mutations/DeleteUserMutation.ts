import {commitMutation, graphql} from "react-relay";
import {ConnectionHandler} from "relay-runtime";
import environment from "../Enviroment";

const mutation = graphql`
    mutation DeleteUserMutation($id:Float!){
        deleteUser(id: $id){
            id
        }
    }
`;

export default (userId: number, callback: Function) => {
    const variables = {
        id: Number(userId)
    }

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: () => {
            callback();
        },
        onError: error => console.error(error)
    });
}