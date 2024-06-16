import React from "react";
import style from "./whatsapp.module.scss";
import { RiWhatsappFill } from "react-icons/ri";

function WhatsappWidget() {
  return (
    <div className={style.whatsapp}>
      <RiWhatsappFill />
    </div>
  );
}

export default WhatsappWidget;
