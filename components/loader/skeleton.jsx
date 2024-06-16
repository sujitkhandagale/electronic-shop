import React from "react";
import style from "./skeleton.module.scss";

function Skeleton({ borderRadius }) {
  return (
    <div
      style={{ borderRadius: borderRadius + "px" }}
      className={style.skeleton_loader}
    ></div>
  );
}

export default Skeleton;
