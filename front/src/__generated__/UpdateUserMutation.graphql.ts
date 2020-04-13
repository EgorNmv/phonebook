/* tslint:disable */
/* eslint-disable */
/* @relayHash 6ede18b2bad7b8cd1b9a55315e22816b */

import { ConcreteRequest } from "relay-runtime";
export type UpdateUserMutationVariables = {
    id: string;
    firstName?: string | null;
    secondName?: string | null;
    phone?: number | null;
    cabinet?: number | null;
    post?: string | null;
    internalPhone?: number | null;
};
export type UpdateUserMutationResponse = {
    readonly updateUser: {
        readonly id: string;
        readonly firstName: string;
        readonly secondName: string;
        readonly phone: number;
        readonly cabinet: number;
        readonly post: string | null;
        readonly internalPhone: number;
    } | null;
};
export type UpdateUserMutation = {
    readonly response: UpdateUserMutationResponse;
    readonly variables: UpdateUserMutationVariables;
};



/*
mutation UpdateUserMutation(
  $id: ID!
  $firstName: String
  $secondName: String
  $phone: Float
  $cabinet: Int
  $post: String
  $internalPhone: Int
) {
  updateUser(id: $id, firstName: $firstName, secondName: $secondName, phone: $phone, cabinet: $cabinet, post: $post, internalPhone: $internalPhone) {
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
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "firstName",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "secondName",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "phone",
    "type": "Float",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cabinet",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "post",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "internalPhone",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "cabinet",
        "variableName": "cabinet"
      },
      {
        "kind": "Variable",
        "name": "firstName",
        "variableName": "firstName"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "internalPhone",
        "variableName": "internalPhone"
      },
      {
        "kind": "Variable",
        "name": "phone",
        "variableName": "phone"
      },
      {
        "kind": "Variable",
        "name": "post",
        "variableName": "post"
      },
      {
        "kind": "Variable",
        "name": "secondName",
        "variableName": "secondName"
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
    "name": "UpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateUserMutation",
    "id": null,
    "text": "mutation UpdateUserMutation(\n  $id: ID!\n  $firstName: String\n  $secondName: String\n  $phone: Float\n  $cabinet: Int\n  $post: String\n  $internalPhone: Int\n) {\n  updateUser(id: $id, firstName: $firstName, secondName: $secondName, phone: $phone, cabinet: $cabinet, post: $post, internalPhone: $internalPhone) {\n    id\n    firstName\n    secondName\n    phone\n    cabinet\n    post\n    internalPhone\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '12e80991a10cb6ad5bad86724aaee8b9';
export default node;
