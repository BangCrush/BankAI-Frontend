const AccountItem = ({ data, sub }) => {
  return (
    <div
      className={`max-y-85 shadow-custom p-20 border-1 mb-10 rounded-20 ${sub ? "bg-white text-black border-gray-800" : "bg-main-color text-white border-main-color"}`}
    >
      <p className="text-15 mb-10">{data.prodName}</p>
      <p className="text-20 font-extrabold">
        {parseInt(data.accBalance, 10).toLocaleString()}{" "}
        <span className="font-semibold">원</span>
      </p>
    </div>
  );
};

export default AccountItem;
