// ImageGallery.tsx
import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { Image } from "../App/App.types"; // <-- Імпорт правильного типу

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (img: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => (
  <ul className={s.list}>
    {images.map((img) => (
      <li key={img.id} onClick={() => onImageClick(img)}>
        <ImageCard src={img.urls.small} alt={img.alt_description ?? "Image"} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
