import { LineTitle } from "../CreateBook/LineTitle/LineTitle";
import Conteiner from "../../Layout/Container/ContainerBook";
import { IoLibrary as IconLibrary } from "react-icons/io5";
import { GiOpenBook as IconBook } from "react-icons/gi";
import BookCard from "../../BookCard/BookCard";
import { useState, useEffect } from "react";
import style from "./ListBook.module.css";

const ListBook = () => {
  const [books, setBooks] = useState([]);

  const [categories, setCategories] = useState([]);

  const listBooks = () => {
    fetch("http://localhost:5000/listagemLivros", {
      method: "GET",
      mode: "cors",
      headers: {
        "Conten-Type": "application/json",
        "Access-Control-Allow-Oringins": "*",
        "Access-Control-Allow-Headers": "*"
      }
    })
      .then(resp => resp.json())
      .then(bookData => {
        if (bookData.data) {
          const booksDB = bookData.data;
          booksDB.sort((a, b) => a.nome_livro.localeCompare(b.nome_livro));
          setBooks(booksDB);
        } else {
          setBooks([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const listCategories = () => {
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
        if (categories.data) setCategories(categories.data);
      })
      .catch(erro => {
        console.log("Erro: " + erro);
      });
  };

  useEffect(() => {
    listBooks();

    listCategories();
  }, []);

  return (
    <section className={style.list_book_container}>
      <div className={style.main}>
        <header>
          <div className={style.title}>
            <IconLibrary />
            <h1>Biblioteca</h1>
          </div>
          <LineTitle />
        </header>
        <div className={style.bookCase}>
          {categories.length === 0 ? (
            <div className={style.notBook}>
            <IconBook />

                <h2>Cadaste seu primeiro livro para exibir o catálogo</h2>

                <button>Cadastra</button>

            </div>
          ) : (
            categories?.map(categorie => (
              <Conteiner key={categorie.cod_categoria} books={books} categorie={categorie} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ListBook;
