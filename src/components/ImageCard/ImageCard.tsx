import React from "react";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className={s.size}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
