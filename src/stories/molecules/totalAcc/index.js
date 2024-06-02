const TotalAcc = ({ data, date }) => {
  return (
    <div className="flex flex-col px-20 py-16 rounded-12 bg-main-color shadow-custom">
      <div className="flex justify-between text-white mb-10">
        <span className="text-14 font-medium">총 자산</span>
        <span className="text-13">{date} 기준</span>
      </div>
      <div className="text-18 font-semibold text-white">
        {data.assets.toLocaleString()}원
      </div>
    </div>
  );
};

export default TotalAcc;
