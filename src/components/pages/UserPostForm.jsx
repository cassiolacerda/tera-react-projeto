import React from "react";
import { useParams } from "react-router-dom";

import logo from "../../images/logo.svg";

export default function UserPostForm() {
  const { userId } = useParams();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const handleForm = (e) => {
    e.preventDefault();

    fetch(`https://62c4e487abea8c085a7e022a.mockapi.io/users/${userId}/posts`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ title, content }),
    }).then(() => {
      setTitle("");
      setContent("");
    });
  };

  return (
    <div className="wrapper">
      <div className="app-header">
        <div className="app-header__logo">
          <img src={logo} className="responsive" alt="" />
        </div>
        <div className="app-header__menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <div className="create-post-screen">
        <h1>Criar</h1>

        <form className="create-post-screen__form">
          <div className="create-post-screen__form-name">
            <label htmlFor="name">Título</label>
            <input
              type="text"
              id="name"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="create-post-screen__form-content">
            <label htmlFor="content">Conteúdo</label>
            <textarea
              name="content"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button onClick={handleForm} className="button-primary">
            Salvar
          </button>
        </form>
      </div>

      <div className="app-footer">Módulo React :: Full Stack Development</div>
    </div>
  );
}
