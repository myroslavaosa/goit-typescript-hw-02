import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  alt: string;
  downloads: number;
  views: number;
}

function ImageModal({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
  downloads,
  views,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modalContent}
      overlayClassName={s.modalOverlay}
      contentLabel="Image Modal"
    >
      <div className={s.modalInner}>
        <img src={imageUrl} alt={alt} className={s.image} />
        <div className={s.info}>
          <p>👁 Views: {views}</p>
          <p>⬇️ Downloads: {downloads}</p>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;
