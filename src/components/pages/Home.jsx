import React from "react";

import logo from "../../images/logo.svg";

export default function Home() {
  return (
    <div className="home-screen">
      <div className="home-screen__logo">
        <img src={logo} className="responsive" alt="" />
      </div>
      <select className="home-screen__select-users">
        <option>User 1</option>
        <option>User 2</option>
        <option>User 3</option>
      </select>
      <button className="button-primary">Entrar</button>
    </div>
  );
}
