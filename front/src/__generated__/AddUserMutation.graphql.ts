/* tslint:disable */
/* eslint-disable */
/* @relayHash e1eb09e62fc65539cb4f451fc9b71b79 */

import { ConcreteRequest } from "relay-runtime";
export type AddUserInput = {
    firstName: string;
    secondName: string;
    phone: number;
    cabinet: number;
    post?: string | null;
    internalPhone: number;
};
export type AddUserMutationVariables = {
    input: AddUserInput;
};
export type AddUserMutationResponse = {
    readonly addUser: {
        readonly id: string;
        readonly firstName: string;
        readonly secondName: string;
        readonly phone: number;
        readonly cabinet: number;
        readonly post: string | null;
        readonly internalPhone: number;
    };
};
export type AddUserMutation = {
    readonly response: AddUserMutationResponse;
    readonly variables: AddUserMutationVariables;
};



/*
mutation AddUserMutation(
  $input: AddUserInput!
) {
  addUser(user: $input) {
    id
    firstName
    secondName
    phone
    cabinet
    post
    internalPhone
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "AddUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "addUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "input"
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "secondName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "phone",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cabinet",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "post",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "internalPhone",
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
    "name": "AddUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddUserMutation",
    "id": null,
    "text": "mutation AddUserMutation(\n  $input: AddUserInput!\n) {\n  addUser(user: $input) {\n    id\n    firstName\n    secondName\n    phone\n    cabinet\n    post\n    internalPhone\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f10065a67ae18a4c1e6c254a6f752bb7';
export default node;
