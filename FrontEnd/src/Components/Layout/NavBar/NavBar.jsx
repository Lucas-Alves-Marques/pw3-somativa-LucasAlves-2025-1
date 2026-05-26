import { Outlet, Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {

  const location = useLocation();

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.divLogo}>
          <Link to="/">
            <img className={style.logo} src="./book.png" alt="Logotipo" />
          </Link>
          <div className={style.titulo}>
            <h1>W. A. L.</h1>
            <p>Web App Libri</p>
          </div>
        </div>
        <ul className={style.list}>
          <li className={`${style.item} ${location.pathname === '/' && style.itemSelecionado}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${style.item} ${location.pathname === '/newBook' && style.itemSelecionado}`}>
            <Link to="/newBook">Cadastrar Livros</Link>
          </li>
          <li className={`${style.item} ${location.pathname === '/listBook' && style.itemSelecionado}`}>
            <Link to="/listBook">Biblioteca</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
  
};

export default NavBar;
