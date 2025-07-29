import React, { useState } from 'react'
import Image from 'next/image'
import Skeleton from './skeleton'
import style from './image_asset.module.scss'

function ImageAsset({
  src,
  alt,
  width,
  height,
  borderRadius,
  draggable,
  objectFit,
  priority,
  className,
}) {
  const [imageLoaded, setImageLoaded] = useState(true)

  const ImageOnLoad = (id) => {
    const imageLoad = id.isTrusted
    if (imageLoad === false) {
      setImageLoaded(false)
    }
  }
  const handleImageError = () => {
    setImageLoaded(false)
  }

  return (
    <>
      {imageLoaded === true && <Skeleton borderRadius={borderRadius} />}
      <Image
        loading='lazy'
        width={width}
        height={height}
        className={`${imageLoaded === false ? style.visible : style.hidden} ${className}`}
        onLoad={(e) => ImageOnLoad(e)}
        src={src}
        alt={alt ?? 'image'}
        onError={(e) => handleImageError(e)}
        objectFit={objectFit}
        draggable={draggable}
        unoptimized={true}
        priority={priority}
      />
    </>
  )
}

export default ImageAsset
