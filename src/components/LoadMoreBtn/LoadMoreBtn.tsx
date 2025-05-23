interface LoadMoreBtnProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button onClick={onClick}>
      Load More
    </button>
  );
}

export default LoadMoreBtn;
