/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserItem_user = {
    readonly id: string;
    readonly firstName: string;
    readonly secondName: string;
    readonly post: string | null;
    readonly " $refType": "UserItem_user";
};
export type UserItem_user$data = UserItem_user;
export type UserItem_user$key = {
    readonly " $data"?: UserItem_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserItem_user">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "UserItem_user",
  "type": "UserType",
  "metadata": null,
  "argumentDefinitions": [],
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
};
(node as any).hash = '996d42f84fbf9c4231dac23353f2e15c';
export default node;
