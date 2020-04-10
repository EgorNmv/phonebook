/* tslint:disable */
/* eslint-disable */
/* @relayHash 8e412e058f67b7dccdc2a38e4faf13a8 */

import { ConcreteRequest } from "relay-runtime";
export type TestComponentQueryVariables = {};
export type TestComponentQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly secondName: string;
        readonly firstName: string;
    }>;
};
export type TestComponentQuery = {
    readonly response: TestComponentQueryResponse;
    readonly variables: TestComponentQueryVariables;
};



/*
query TestComponentQuery {
  users {
    id
    secondName
    firstName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "users",
    "storageKey": null,
    "args": null,
    "concreteType": "UserType",
    "plural": true,
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
        "name": "secondName",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "firstName",
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
    "name": "TestComponentQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TestComponentQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "TestComponentQuery",
    "id": null,
    "text": "query TestComponentQuery {\n  users {\n    id\n    secondName\n    firstName\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '2bd025d7db11291a837a53be09ecab44';
export default node;
