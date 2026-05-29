import { GiOpenBook as IconBook } from "react-icons/gi";
import styles from './ButtonLink2.module.css';
import { Link } from "react-router-dom";

export const ButtonLink2 = ({ text, link, icon, type}) => {
  return (
    <Link to={link}>
      <div className={`${styles.button} ${styles[type]}`}>
        {icon}
        <p>{text}</p>
      </div>
    </Link>
  );
};
