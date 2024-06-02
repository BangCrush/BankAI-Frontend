import { Link } from "react-router-dom";

const ProdItem = ({ title, img, urls }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Link to={urls}>
        <div className="flex justify-center items-center w-60 h-60 rounded-10 bg-gray-menu shadow-custom mb-6">
          {img ? (
            <img className="h-55 w-50" alt={title} src={`/assets/${img}.svg`} />
          ) : (
            <div>Image not found</div>
          )}
        </div>
      </Link>
      <div className="text-14">{title}</div>
    </div>
  );
};

export default ProdItem;
