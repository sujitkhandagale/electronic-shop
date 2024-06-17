import React from "react";
import style from "./page-header.module.scss";
import ImageAsset from "@/components/loader/ImageAsset";
import testImage from "../../../assets/abstract-1264071_1920.png";

function PageHeader({ title }) {
  return (
    <div className={style.headers}>
      <div className={style.image}>
        <ImageAsset src={testImage} alt="image" width={1920} height={1080} />
      </div>
      <div className={style.overlay}></div>
      <div className={style.text}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default PageHeader;
