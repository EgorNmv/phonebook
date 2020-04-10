/* tslint:disable */
/* eslint-disable */
/* @relayHash f899f31aea4748fdee816d4c98aa2645 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserListPageQueryVariables = {};
export type UserListPageQueryResponse = {
    readonly users: ReadonlyArray<{
        readonly " $fragmentRefs": FragmentRefs<"UserList_users">;
    }>;
};
export type UserListPageQuery = {
    readonly response: UserListPageQueryResponse;
    readonly variables: UserListPageQueryVariables;
};



/*
query UserListPageQuery {
  users {
    ...UserList_users
    id
  }
}

fragment UserItem_user on UserType {
  id
  firstName
  secondName
  post
}

fragment UserList_users on UserType {
  ...UserItem_user
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
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
            "kind": "FragmentSpread",
            "name": "UserList_users",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListPageQuery",
    "argumentDefinitions": [],
    "selections": [
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
            "name": "post",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "UserListPageQuery",
    "id": null,
    "text": "query UserListPageQuery {\n  users {\n    ...UserList_users\n    id\n  }\n}\n\nfragment UserItem_user on UserType {\n  id\n  firstName\n  secondName\n  post\n}\n\nfragment UserList_users on UserType {\n  ...UserItem_user\n}\n",
    "metadata": {}
  }
};
(node as any).hash = '1b4b49fae4bde3c1a1da4f15f7db2c38';
export default node;
