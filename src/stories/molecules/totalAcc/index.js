const TotalAcc = ({ assets, date }) => {
  return (
    <div className="flex flex-col px-20 py-16 rounded-12 bg-main-color">
      <div className="flex justify-between text-white mb-10">
        <span>총 자산</span>
        <span>{date}기준</span>
      </div>
      <div className="text-18 font-semibold text-white">{assets} 원</div>
    </div>
  );
};

export default TotalAcc;
