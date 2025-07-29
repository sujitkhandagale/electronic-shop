import React from "react";
import style from "./media_preview.module.scss";
import media from "../../../assets/media.jpg";
import ImageAsset from "@/components/loader/ImageAsset";

function MediaPreview() {
  return (
    <div className={style.media_preview}>
      <div className={style.image}>
        <ImageAsset src={media} alt="image" width={1920} height={1080} />
      </div>
      <div className={style.play}>
          <h3>Just Landed</h3>
        <iframe
          width="853"
          height="480"
          src="https://www.youtube.com/embed/SqSMxb9txSw"
          title="Nintendo Switch Sports - Launch Trailer - Nintendo Switch"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MediaPreview;
