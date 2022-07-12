import React from "react";

import { UserListItem } from ".";

export default function UserlListWrapper() {
  return (
    <div className="blogs-screen__list">
      <UserListItem id="1" src="" name="Cássio Lacerda" />
      <UserListItem id="2" src="" name="César Lacerda" />
      <UserListItem id="3" src="" name="Aura Lacerda" />
    </div>
  );
}
