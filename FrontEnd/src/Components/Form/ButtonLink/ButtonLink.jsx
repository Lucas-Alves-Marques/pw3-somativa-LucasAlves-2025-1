import './ButtonLink.module.css'
import { Link } from 'react-router-dom'

const ButtonLink = ({ label, cod_livro, router }) => {

    return (
        <div>
            <Link to={`${router}${cod_livro}`}>
                <button>{label}</button>
            </Link>
        </div>
    )
}

export default ButtonLink;