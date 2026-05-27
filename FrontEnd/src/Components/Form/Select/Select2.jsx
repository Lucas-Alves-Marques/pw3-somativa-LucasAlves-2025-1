import { IoIosArrowDown as ArrowIcon } from "react-icons/io";
import { useEffect, useState } from "react";
import style from "./Select2.module.css";

export const Select2 = ({ text, name, handlerChange, options, value }) => {
  const [openBox, setOpenBox] = useState(false);

  const [nameCat, setNameCat] = useState("");

  useEffect(() => {

    if(value){

        const categorie = options.find(opt => opt.cod_categoria == value);

        setNameCat(categorie.nome_categoria)

    };


  }, [value]);

  return (
    <div className={style.form_control}>
      <label onClick={() => setOpenBox(!openBox)}>{text}</label>
      <div className={style.select} onClick={() => setOpenBox(!openBox)}>
        <p name={name}>{nameCat || "Selecione uma Categoria"}</p>
        <ArrowIcon className={openBox && style.openIcon} />
        <div className={`${style.comboBox} ${!openBox && style.hidden}`}>
          {options.map((opt, index) => (
            <p
              key={index}
              onClick={() => {
                handlerChange(opt.cod_categoria);
              }}
            >
              {opt.nome_categoria}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
