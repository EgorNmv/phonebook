/* tslint:disable */
/* eslint-disable */
/* @relayHash 7cbb0d8c25f2614bd897580ac7a8e0ed */

import { ConcreteRequest } from "relay-runtime";
export type DeleteUserMutationVariables = {
    id: number;
};
export type DeleteUserMutationResponse = {
    readonly deleteUser: {
        readonly id: string;
    } | null;
};
export type DeleteUserMutation = {
    readonly response: DeleteUserMutationResponse;
    readonly variables: DeleteUserMutationVariables;
};



/*
mutation DeleteUserMutation(
  $id: Float!
) {
  deleteUser(id: $id) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Float!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "UserType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteUserMutation",
    "id": null,
    "text": "mutation DeleteUserMutation(\n  $id: Float!\n) {\n  deleteUser(id: $id) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3806fc1d71f22607d87c8fd139d49b2a';
export default node;
