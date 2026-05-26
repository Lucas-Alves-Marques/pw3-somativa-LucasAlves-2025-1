/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import style from './UpdateBooks.module.css'
import Input from '../../Form/Input/Input'
import Select from '../../Form/Select/Select'
import Button from '../../Form/ButtonDefault/ButtonDefault'

const UpdateBooks = () => {

        /* CRIAÇAO DO STATE DOS DADOS DOS LIVROS */
        const [book, setBook] = useState({});

        /* MENSAGEM DE ALERTA */
        const [message, setMessage] = useState('')

        /* RECUPERA O CÓDIGO ENVIADO PELO BOTÃO */
        const { cod_livro } = useParams();

        /* OBJETO DE NAVEGAÇÃO */
        const navigate = useNavigate();

        /* STATE DE DADOS DAS CATEGORIAS VINDAS DO ARQUIVO db.json */
        const [categories, setCategories] = useState([]);

        /* HANDLER DE CAPTURA DOS DADOS DE INPUT (NOME DO LIVRO, AUTOR E DESCRIÇÃO) */
        function handlerChangeBook(event) {

                setBook({ ...book, [event.target.name]: event.target.value });

                // console.log(book)
        }

        /* CAPTURA OS DADOS DA SELECT */
        function handleChangeCategory(event) {

                setBook({ ...book, cod_categoria: event.target.value });
                // console.log(book);
        }

        /* RECUPERA OS DADOS DE CATEGORIA DO BANCO DADOS */
        useEffect(() => {

                fetch('http://localhost:5000/listagemCategorias', {
                        method: 'GET',
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                }).then(
                        (resp) =>
                                resp.json()
                ).then(
                        (data) => {
                                setCategories(data.data);
                                // console.log('TESTE-DATA:' + data.data);
                        }
                ).catch(
                        (error) => {
                                console.log(error);
                        }
                )
        }, [])

        /* RECUPERA OS DADOS DO LIVRO DO BACKEND */
        useEffect(() => {

                fetch(`http://localhost:5000/listagemLivro/${cod_livro}`, {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                })
                        .then((resp) => resp.json())
                        .then((data) => {
                                // console.log('LIVROS: ' + data.data.cod_livro);
                                setBook(data.data);
                                // console.log('STATE: ' + book.nome_livro);
                        })
                        .catch((err) => { console.log(err) });

        }, []);

        /* ALTERAÇÃO DOS DADOS DE LIVRO */
        function updateBook(book) {

                // console.log(JSON.stringify(book))

                fetch('http://localhost:5000/alterarLivro', {
                        method: 'PUT',
                        mode: 'cors',
                        headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Headers': '*'
                        },
                        body: JSON.stringify(book)
                })
                        .then(
                                (resp) => resp.json()
                        )
                        .then(
                                (data) => {
                                        // console.log(data);
                                        navigate('/listBook', { state: 'LIVRO ALTEARADO COM SUCESSO!' });
                                }
                        )
                        .catch(
                                (err) => { console.log(err) }
                        )
        }

        /* FUNÇÃO DE SUBMIT */
        function submit(event) {

                event.preventDefault();

                updateBook(book);
        }

        return (
                <section className={style.create_book_container}>

                        <form className={message ? style.alertMessage : ''} onSubmit={submit}>

                                <h1>ATUALIZAÇÃO DE LIVROS</h1>

                                <Input
                                        type="text"
                                        name="nome_livro"
                                        id="nome_livro"
                                        placeholder="Digite o nome do livro"
                                        action={handlerChangeBook}
                                        value={book.nome_livro} />

                                <Input
                                        type="text"
                                        name="autor_livro"
                                        id="autor_livro"
                                        placeholder="Digite o nome do autor"
                                        action={handlerChangeBook}
                                        value={book.autor_livro} />

                                <Input
                                        type="text"
                                        name="descricao_livro"
                                        id="descricao_livro"
                                        placeholder="Digite a descrição do livro"
                                        action={handlerChangeBook}
                                        value={book.descricao_livro} />

                                <Select
                                        name="cod_categoria"
                                        id="cod_categoria"
                                        text="Categoria do Livro"
                                        action={handleChangeCategory}
                                        options={categories}
                                        value={book.cod_categoria} />

                                <Button label="Atualizar Livro" />

                        </form>

                        {message &&

                                <div className={style.message}>

                                        <p>{message}</p>
                                        <button onClick={() => { setMessage(''); navigate('/listBook') }} > OK </button>

                                </div>

                        }

                </section>
        )
}

export default UpdateBooks
