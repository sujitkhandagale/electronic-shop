import React from "react";
import style from "./news-letter.module.scss";
import Button from "@/components/common/button/Button";

function NewsLetter() {
  return (
    <div className={style.news_letter}>
      <input type="text" placeholder={"Enter Your Email"} />
      <Button variant={"primary"}>Subscribe</Button>
    </div>
  );
}

export default NewsLetter;
