import React from "react";

import { Default } from "../templates";
import { UserlListWrapper } from "../molecules";

export default function Users() {
  return (
    <Default>
      <div className="blogs-screen">
        <h1>Blogs</h1>
        <UserlListWrapper />
      </div>
    </Default>
  );
}
