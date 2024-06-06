const Product = ({ name, promotion, period, rate, isLast }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-7">
        <span className="font-extrabold text-black-900">{name}</span>
        <span className="text-gray-900 text-12">
          {period === 12 ? `연(세전, ${period}개월)` : null}
        </span>
      </div>
      <div className="flex justify-between items-center mb-7">
        <span className="text-gray-900 text-12">{promotion}</span>
        <span className="text-main-color font-semibold">{rate}%</span>
      </div>
      {!isLast && <div className="h-1 w-full bg-gray-border"></div>}
    </div>
  );
};

export default Product;
