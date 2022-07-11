import logo from "./images/logo.svg";

import "./styles/normalize.css";
import "./styles/fontawesome.min.css";
import "./styles/main.css";

function App() {
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

export default App;
