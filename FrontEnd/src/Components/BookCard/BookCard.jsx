import { IoIosArrowForward as IconArrow} from "react-icons/io";
import Button from "../Form/ButtonLink/ButtonLink";
import style from "./BookCard.module.css";

const BookCard = ({ book }) => {
  return (
    <div className={style.bookCard}>
      <div className={style.header}>
        <div className={style.icon}>

            <p>{book.nome_livro.charAt(0)}</p>

        </div>
        <div className={style.info}>
          <h3 className={style.titulo}> {book.nome_livro} </h3>
          <p className={style.autor}>{book.autor_livro}</p>
        </div>
      </div>
      <div className={style.details}>

        <p>Detalhes</p>
        <IconArrow />

      </div>
    </div>
  );
};

export default BookCard;
