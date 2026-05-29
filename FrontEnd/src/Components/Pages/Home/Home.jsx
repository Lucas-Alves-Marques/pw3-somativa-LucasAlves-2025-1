import { GiOpenBook as IconBook } from "react-icons/gi";
import { FaList as IconList } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import React from "react";
import { ButtonLink2 } from "../../Form/ButtonLink/ButtonLink2";

const Home = () => {
  return (
    <section className={styles.home_container}>
      <div className={styles.welcome}>
        <div className={styles.title}>
          <p>Bem-Vindo ao</p>
          <h1>
            Web App <span>Libri</span>
          </h1>
        </div>
        <div className={styles.buttons}>
          {/* <Link to="/newBook">
            <div className={styles.register}>
              <IconBook />
              <p>Cadastrar</p>
            </div>
          </Link>
          <Link to="/listBook">
            <div className={styles.list}>
              <IconList />
              <p>Biblioteca</p>
            </div>
          </Link> */}
          <ButtonLink2 text="Cadastrar" link="/newBook" icon={<IconBook />} type="full" />
          <ButtonLink2 text="Biblioteca" link="/listBook" icon={<IconList />} type="void" />
        </div>
      </div>
      <img className="book_home" src="./book_home.png" alt="" />
    </section>
  );
};

export default Home;
