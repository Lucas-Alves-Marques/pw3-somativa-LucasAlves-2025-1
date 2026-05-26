import { Outlet, Link } from 'react-router-dom'

import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <>

            <nav className={style.navbar}>

                <ul className={style.list}>

                    <li className={style.item}>

                        <Link to='/'>

                            <img className={style.logo} src="./book.png" alt="Logotipo" />

                        </Link>

                    </li>

                    <li className={style.item}>

                        <Link to='/'>HOME</Link>

                    </li>

                    <li className={style.item}>

                        <Link to='/newBook'>CADASTRAR LIVROS</Link>

                    </li>

                    <li className={style.item}>

                        <Link to='/listBook'> LISTAR LIVROS</Link>

                    </li>

                </ul>

            </nav>

            <Outlet />

        </>

    )
}

export default NavBar
