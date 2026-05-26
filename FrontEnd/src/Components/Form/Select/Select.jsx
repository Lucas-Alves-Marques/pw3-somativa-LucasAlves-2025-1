import { useEffect } from 'react';
import style from './Select.module.css'

function Select({ text, name, id, handlerChange, options, value }) {

    useEffect(() => {

        console.log(options)

    }, [options])

    return (

        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={handlerChange} value={value}>
                <option value=''>Selecione uma categoria</option>
                {/*<option value='1'>Ficcção Cientifica</option>
                <option value='2'>Fantasia Heroica</option>
                <option value='3'>Suspense</option>
                <option value='4'>Terror</option> */}

                {
                    options.map((option) => (

                        <option key={option.cod_categoria} value={option.cod_categoria}> {option.nome_categoria}</option>
                    ))
                }


            </select>

            {/* 
            <input list="frutas" id="fruta" name="fruta" />

            <datalist id="frutas" >

                {
                    options.map((option) => (

                        <option key={option.cod_categoria} value={option.cod_categoria}>{option.cod_categoria} {option.nome_categoria}</option>
                    ))

                }

            </datalist> */}

        </div>

    )
}

export default Select;