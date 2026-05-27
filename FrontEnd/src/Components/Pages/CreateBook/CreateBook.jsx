import { GiOpenBook as IconBook } from "react-icons/gi";
import { Select2 } from "../../Form/Select/Select2.jsx";
import { LineTitle } from "./LineTitle/LineTitle.jsx";
import Button from "../CreateBook/Button/Button.jsx";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Createbooks.module.css";
import Input from "../../Form/Input/Input";
import { MessageAlert } from "../../Message/Message.jsx";

const CreateBook = () => {
  const [book, setBook] = useState([]);

  const [categories, setCategories] = useState([]);

  const [message, setMessage] = useState({
    text: "",
    action: () => {}
  });

  const navigate = useNavigate();

  const handleBook = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleChangeCategory = cod_cate => {
    setBook({
      ...book,
      cod_categoria: cod_cate
    });
  };

  const clearMessage = () => {
    setMessage({
      text: "",
      action: () => {}
    });
  };

  const submit = e => {
    e.preventDefault();

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
      .then(resp => {
        if (!resp.ok) throw new Error("Não foi possivel cadastrar o livro");

        return resp.json();
      })
      .then(() => {
        setMessage({
          text: "Livro Cadastrado",
          action: () => navigate("/listBook")
        });
      })
      .catch(erro => {
        console.log("Erro: " + erro);

        setMessage({
          text: "Erro ao Cadastrar Livro",
          action: () => clearMessage()
        });
      });
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

  return (
    <section className={style.create_book_container}>
      <form>
        <div className={style.title}>
          <div className={style.titleDiv}>
            <IconBook />
            <h1>CADASTRO DE LIVROS</h1>
          </div>
          <LineTitle />
        </div>
        <div className={style.main}>
          <div className={style.left}>
            <img src="./book_image2.jpg" alt="" />
            <Button label="Salvar" onClick={submit} />
          </div>
          <div className={style.inputs}>
            <Input
              text="Livro:"
              type="text"
              name="nome_livro"
              id="nome_livro"
              placeholder="Digite o nome do livro"
              action={handleBook}
            />
            <Input
              text="Autor:"
              type="text"
              name="autor_livro"
              id="autor_livro"
              placeholder="Digite o nome do autor"
              action={handleBook}
            />
            <Select2
              name="cod_categoria"
              text="Categoria:"
              value={book.cod_categoria}
              handlerChange={handleChangeCategory}
              options={categories}
            />

            <Input
              text="Descrição:"
              type="text"
              name="descricao_livro"
              id="descricao_livro"
              placeholder="Digite a descrição do livro"
              action={handleBook}
            />
          </div>
        </div>
      </form>

      {message.text && <MessageAlert message={message.text} onClick={message.action} />}
    </section>
  );
};

export default CreateBook;
