import { useEffect } from "react";
import style from "./Select.module.css";

function Select({ text, name, id, handlerChange, options, value }) {

  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>

      <select name={name} id={id} onChange={handlerChange} value={value}>
        <option value="">Selecione uma categoria</option>

        {options.map(option => (
          <option key={option.cod_categoria} value={option.cod_categoria}>
            {" "}
            {option.nome_categoria}
          </option>
        ))}
      </select>

    </div>
  );
}

export default Select;
