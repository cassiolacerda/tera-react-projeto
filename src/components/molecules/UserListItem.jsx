import React from "react";

import { Avatar } from "../atoms";

export default function UserListItem(props) {
  return (
    <a href={`/users/${props.id}`} className="blogs-screen__list-item">
      <div className="blogs-screen__list-item-photo">
        <Avatar src={props.src} />
      </div>
      <div className="blogs-screen__list-item-name">{props.name}</div>
    </a>
  );
}
