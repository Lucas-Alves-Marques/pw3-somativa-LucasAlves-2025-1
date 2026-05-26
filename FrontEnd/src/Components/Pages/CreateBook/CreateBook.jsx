import React, { useEffect, useState } from "react";
import style from "./Createbooks.module.css";
import { useNavigate } from "react-router-dom";

import Input from "../../Form/Input/Input";
import Select from "../../Form/Select/Select";
import Button from "../CreateBook/Button/Button.jsx";

const CreateBook = () => {
  const [book, setBook] = useState([]);

  //cria a estrutura de state para os dados de categoria

  const [categories, setCategories] = useState([])

  const [message, setMessage] = useState('')

  const navigate = useNavigate();

  // captura de dados do input

  const handleBook = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });

    console.log(book);
  };

  // captura de dados do select

  const handleChangeCategory = (e) => {
    setBook({
      ...book,
      cod_categoria: e.target.options[e.target.selectedIndex].value,
    });

  };

  // envio dos dados para a API

  const submit = (e) => {

    e.preventDefault();

    insertBook(book)

    console.log(book)

  };

  // Recupera os dados de categoria da APIRest

  useEffect(() => {

    fetch('http://127.0.0.1:5000/listagemCategorias', {

      method: 'GET',
      headers: {

        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',

      },

    }).then((response) =>

      response.json()
      // console.log(response.json())

    ).then((categories) => {

      // console.log('TESTE' + categories.data)
      setCategories(categories.data)

    }).catch((erro) => {

      console.log('Erro: ' + erro)
    })

  }, []);

  // Inserção de Livro

  const insertBook = (book) =>{

    fetch('http://127.0.0.1:5000/inserirLivro', {

      method: 'POST',
      mode: 'cors',
      headers: {

        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',

      },
      body: JSON.stringify(book)

    }).then((response) =>

      response.json()
      // console.log(response.json())

    ).then((respJson) => {

      console.log('Resposta: ' + respJson)

      setMessage('Livro Cadastrado')

    }).catch((erro) => {

      console.log('Erro: ' + erro)

      setMessage('Erro ao Cadastrar Livro')

    })


  }

  return (
    <section className={style.create_book_container}>

      <form className={message ? style. alertMessage : ''} onSubmit={submit}>

        <h1>CADASTRO DE LIVROS</h1>

        <Input
          type="text"
          name="nome_livro"
          id="nome_livro"
          placeholder="Digite o nome do livro"
          action={handleBook}
        />

        <Input
          type="text"
          name="autor_livro"
          id="autor_livro"
          placeholder="Digite o nome do autor"
          action={handleBook}
        />

        <Input
          type="text"
          name="descricao_livro"
          id="descricao_livro"
          placeholder="Digite a descrição do livro"
          action={handleBook}
        />

        <Select
          name="cod_categoria"
          id="cod_categoria"
          text="Categoria do Livro"
          handlerChange={handleChangeCategory}
          options={categories}
        />

        <Button label="Cadastrar Livro"  />

      </form>

      {message &&

        <div className={style.message}>

          <p>{message}</p>
          <button onClick={()=>{setMessage(''); navigate('/listBook')}} > OK </button>

        </div>

      }

    </section>
  );
};

export default CreateBook;
