const AccHistory = ({data}) => {
  
  const date = new Date(data.hisDateTime);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className="border-gray-800 border-solid border-1 px-19 py-24">
      <div className="grid grid-cols-8">
        <div className="text-10 col-span-1">
          <p className="mt-2">{month + "." + day}</p>
        </div>
        <div className="col-span-4">
          <p className="text-13 font-bold">{data.target}</p>
          <p className="text-10 text-gray-900">{data.hisType}</p>
        </div>
        <div className="col-span-3 text-right">
          <p className={`text-13 font-extrabold ${data.hisAmount < 0 ? "text-main-color":"text-black"}`}>{data.hisAmount.toLocaleString()}원</p>
          <p className="text-10">{data.balance.toLocaleString()}원</p>
        </div>
      </div>
    </div>
  );
};

export default AccHistory;


