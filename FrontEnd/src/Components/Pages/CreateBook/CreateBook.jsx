import React, { useEffect, useState } from "react";
import style from "./Createbooks.module.css";
import { useNavigate } from "react-router-dom";

import Input from "../../Form/Input/Input";
import Select from "../../Form/Select/Select";
import Button from "../CreateBook/Button/Button.jsx";

const CreateBook = () => {
  const [book, setBook] = useState([]);

  const [categories, setCategories] = useState([]);

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleBook = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleChangeCategory = e => {
    setBook({
      ...book,
      cod_categoria: e.target.options[e.target.selectedIndex].value
    });
  };

  const submit = e => {
    e.preventDefault();

    insertBook(book);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/listagemCategorias", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    })
      .then(resp => resp.json())
      .then(categories => {
        setCategories(categories.data);
      })
      .catch(erro => {
        console.log("Erro: " + erro);
      });
  }, []);

  const insertBook = book => {
    fetch("http://127.0.0.1:5000/inserirLivro", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      },
      body: JSON.stringify(book)
    })
      .then(resp => resp.json())
      .then(() => {
        setMessage("Livro Cadastrado");
      })
      .catch(erro => {
        console.log("Erro: " + erro);

        setMessage("Erro ao Cadastrar Livro");
      });
  };

  return (
    <section className={style.create_book_container}>
      <form className={message && style.alertMessage} onSubmit={submit}>
        <h1>CADASTRO DE LIVROS</h1>

        <div className={style.main}>
          <div className={style.left}>
            <img src="./book_image2.jpg" alt="" />
            <Button label="Cadastrar Livro" />
          </div>

          <div className={style.inputs}>
            <div>
              <h1>Livro:</h1>
              <Input
                type="text"
                name="nome_livro"
                id="nome_livro"
                placeholder="Digite o nome do livro"
                action={handleBook}
              />
            </div>
            <div>
              <h1>Autor:</h1>
              <Input
                type="text"
                name="autor_livro"
                id="autor_livro"
                placeholder="Digite o nome do autor"
                action={handleBook}
              />
            </div>
            <div>
              <h1>Descrição:</h1>

              <Input
                type="text"
                name="descricao_livro"
                id="descricao_livro"
                placeholder="Digite a descrição do livro"
                action={handleBook}
              />
            </div>
            <div>
              <h1>Categoria:</h1>
              <Select
                name="cod_categoria"
                id="cod_categoria"
                text=""
                handlerChange={handleChangeCategory}
                options={categories}
              />
            </div>
          </div>
        </div>
      </form>

      {message && (
        <div className={style.message}>
          <p>{message}</p>
          <button
            onClick={() => {
              setMessage("");
              navigate("/listBook");
            }}
          >
            {" "}
            OK{" "}
          </button>
        </div>
      )}
    </section>
  );
};

export default CreateBook;
