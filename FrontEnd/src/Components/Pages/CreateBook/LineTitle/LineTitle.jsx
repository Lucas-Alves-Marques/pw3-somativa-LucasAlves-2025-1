import style from "./LineTitle.module.css";

export const LineTitle = () => {

  return (

    <div className={style.DivPai}>

      <div className={style.LineLeft} />
      <div className={style.Base}>

        <div className={style.Eixo}/>
        <div className={style.DivEixoX}>

          <div className={style.Eixo}></div>
          <div className={style.Eixo}></div>

        </div>
        <div className={style.Eixo}/>

      </div>
      <div className={style.LineRight} />

    </div>

  );

};
