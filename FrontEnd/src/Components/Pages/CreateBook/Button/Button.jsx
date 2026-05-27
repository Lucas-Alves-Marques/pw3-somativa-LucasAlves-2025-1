import { GiOpenBook as IconBook } from "react-icons/gi";
import styles from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <div className={styles.register} onClick={onClick}>
      <IconBook />
      <p>{label}</p>
    </div>
  );
};

export default Button;
