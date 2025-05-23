import { ClipLoader } from "react-spinners";

interface LoaderProps {
  loading: boolean;
}

function Loader({ loading }: LoaderProps) {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color="#36d7b7"
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
