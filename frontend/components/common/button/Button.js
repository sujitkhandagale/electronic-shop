import React from "react";
import style from "./button.module.scss";

function Button(props, { variant }) {
  return (
    <div className={style.button}>
      <button {...props}>{props?.children}</button>
    </div>
  );
}

export default Button;
