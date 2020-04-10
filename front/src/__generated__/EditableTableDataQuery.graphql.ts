/* tslint:disable */
/* eslint-disable */
/* @relayHash 897b1ee0c57aaa70364d0bbd53314973 */

import { ConcreteRequest } from "relay-runtime";
export type EditableTableDataQueryVariables = {};
export type EditableTableDataQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly firstName: string;
        readonly secondName: string;
        readonly phone: number;
        readonly cabinet: number;
        readonly post: string | null;
        readonly internalPhone: number;
    }>;
};
export type EditableTableDataQuery = {
    readonly response: EditableTableDataQueryResponse;
    readonly variables: EditableTableDataQueryVariables;
};



/*
query EditableTableDataQuery {
  users {
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
    "name": "EditableTableDataQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditableTableDataQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "EditableTableDataQuery",
    "id": null,
    "text": "query EditableTableDataQuery {\n  users {\n    id\n    firstName\n    secondName\n    phone\n    cabinet\n    post\n    internalPhone\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '42658e86af04df3e62b45f3809451919';
export default node;
