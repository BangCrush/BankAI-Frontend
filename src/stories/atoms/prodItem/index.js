const ProdItem = ({ title, img }) => {
  console.log("img", img);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center w-60 h-60 rounded-10 bg-gray-menu shadow-custom mb-6">
        {img ? (
          <img className="w-40 h-50" alt={title} src={`/assets/${img}.svg`} />
        ) : (
          <div>Image not found</div>
        )}
      </div>
      <div className="text-14">{title}</div>
    </div>
  );
};

export default ProdItem;
