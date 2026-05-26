import styles from "./Input.module.css";
import { useState } from "react";

function Input({ type, text,  name, id, placeholder, value, action }) {

  const {dado, setDado} = useState()


  return (

    <div className={styles.form_control}>
    <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={action}/>
    </div>

  );
}

export default Input;
