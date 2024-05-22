const accountItem = ({data, sub}) => {
  return (
    <div className={`max-w-310 max-y-85 p-20 border-1 rounded-20 ${sub ? "bg-white text-black border-gray-800" : "bg-main-color text-white border-main-color"}`}>
      <p className="text-13 mb-10">{data.prodName}</p>
      <p className="text-14 font-extrabold">{data.accBalance}</p>
    </div>
  );
};

export default accountItem;


