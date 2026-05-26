import React from "react";
import style from './ListBook.module.css';
import { useState, useEffect } from "react";
import Style from './ListBook.module.css'

import ladraoRaios from '../../../assets/Ladrao_de_Raios.jpg';
import BookCard from "../../BookCard/BookCard";

import Conteiner from '../../Layout/ContainerBook'


const ListBook = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/listagemLivros', {

            method: 'GET',
            mode: 'cors',
            headers: {

                'Conten-Type': 'application/json',
                'Access-Control-Allow-Oringins': '*',
                'Access-Control-Allow-Headers': '*'

            }

        }).then((resp) => resp.json())
            .then((bookData) => {

                setBooks(...books, bookData.data)

                // console.log(bookData.data)


            }).catch((err) => { console.log(err) });

    }, []);

    return (

        <>

            {books.length >= 1 ?


                <section className={Style.body}>

                    <h1>LIVROS CADASTRADOS</h1>

                    <Conteiner>

                        {books.map((book) => (

                            <BookCard
                                cod_livro={book.cod_livro}
                                nome_livro={book.nome_livro}
                                autor_livro={book.autor_livro}
                                img_livro={ladraoRaios}
                                key={book.cod_livro} />
                        ))

                        }

                    </Conteiner>


                </section>

                :

                <section className={Style.NotBook}>

                    <h1>NÃO HÁ LIVROS CADASTRADOS</h1>

                </section>



            }

        </>


    )
}

export default ListBook