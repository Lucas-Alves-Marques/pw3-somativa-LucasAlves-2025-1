import Button from "../Form/ButtonLink/ButtonLink";
import style from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <div className={style.bookCard}>
      <div className={style.imgBook}>
      </div>
      <div className={style.info}>
        <h3 className={style.titulo}>
            
            {book.nome_livro.substring(0,12)}...
            
            </h3>
        <p className={style.autor}>{book.autor_livro.substring(0,10)}</p>
      </div>
    </div>
  );
};

export default BookCard;
