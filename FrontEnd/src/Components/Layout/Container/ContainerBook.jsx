import { GiOpenBook as IconBook } from "react-icons/gi";
import style from "./ContainerBook.module.css";
import React from "react";
import BookCard from "../../BookCard/BookCard";

const ContainerBook = ({ books, categorie }) => {
  return (
    <div className={style.container_book}>
      <div className={style.header}>
        <IconBook />
        <p>{categorie.nome_categoria}</p>
      </div>
      <div className={style.main}>
        {books.map((book, index) => {
          if (book.cod_categoria === categorie.cod_categoria) {
            return <BookCard key={index} book={book} />;
          }
        })}
      </div>
    </div>
  );
};

export default ContainerBook;
