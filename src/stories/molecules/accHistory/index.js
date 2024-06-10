import { historyTypeMapping } from "constants/accounts";

const AccHistory = ({ data }) => {
  const date = new Date(data.hisDateTime);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  console.log(data.hisType);

  return (
    <div className="border-gray-800 border-solid border-b-1 pb-19 py-20 px-20">
      <div className="grid grid-cols-8">
        <div className="text-14 col-span-1">
          <p className="mt-2">{month + "." + day}</p>
        </div>
        <div className="col-span-4">
          <p className="text-17 font-semibold">{data.target}</p>
          <p className="text-14 text-gray-900">
            #{historyTypeMapping[data.hisType]}
          </p>
        </div>
        <div className="col-span-3 text-right font-bold">
          <p
            className={`text-19  ${data.hisAmount < 0 ? "text-main-color" : "text-black"}`}
          >
            {parseInt(data.hisAmount, 10).toLocaleString()}원
          </p>{" "}
          <p className="text-16 text-gray-semi">
            {parseInt(data.balance, 10).toLocaleString()}원
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccHistory;
