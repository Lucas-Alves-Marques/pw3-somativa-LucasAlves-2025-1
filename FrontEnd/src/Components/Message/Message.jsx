import { useEffect, useState } from "react";
import style from "./Message.module.css";

export const MessageAlert = ({ message, onClick }) => {
  const [visible, setVisible] = useState(false);

  const closeMessage = () => {

    setVisible(false);

    setTimeout(() => {

        onClick()

    }, 500);

  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`${style.body} ${!visible && style.invisible}`}>
      <div className={style.main}>
        <p>{message}</p>
        <button onClick={closeMessage}>OK</button>
      </div>
    </div>
  );
};
