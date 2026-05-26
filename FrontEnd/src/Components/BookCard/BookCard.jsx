import Button from '../Form/ButtonLink/ButtonLink'
import style from './BookCard.module.css'

const BookCard = ({cod_livro, nome_livro, autor_livro, img_livro})=>{
    return(
        
        <div className={style.bookCard}>

            <h3 className={style.titulo}>{nome_livro}</h3>
            <p className={style.autor}>{autor_livro}</p>
            <img src={img_livro}/>
            <Button
                label='DETALHES'
                router={`/details/`} 
                cod_livro={cod_livro}/>
        </div>
        
    )
}

export default BookCard
