/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserList_users = ReadonlyArray<{
    readonly " $fragmentRefs": FragmentRefs<"UserItem_user">;
    readonly " $refType": "UserList_users";
}>;
export type UserList_users$data = UserList_users;
export type UserList_users$key = ReadonlyArray<{
    readonly " $data"?: UserList_users$data;
    readonly " $fragmentRefs": FragmentRefs<"UserList_users">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserList_users",
  "type": "UserType",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "UserItem_user",
      "args": null
    }
  ]
};
(node as any).hash = 'd0ef4efc2879eebc0a9668e0167d3afc';
export default node;
