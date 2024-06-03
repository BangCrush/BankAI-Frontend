import {
  useGetBalanceAccount,
  useGetHistoryAccount,
} from "hooks/queries/accountQueries";
import { useLocation } from "react-router-dom";
import MediumButton from "stories/atoms/mediumButton";
import AccHistory from "stories/molecules/accHistory";
import BlueHeaderBar from "stories/molecules/blueHeaderBar";

const AccHistoryPage = () => {
  const location = useLocation();
  const accCode = location.state.accCode || "";
  const prodName = location.state.prodName || "";
  const page = 1;
  const { data: accountBalance } = useGetBalanceAccount(accCode);
  const {
    data: accountHistory,
    isLoading,
    error,
  } = useGetHistoryAccount({ accCode, page });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading account history</div>;

  return (
    <>
      {accountHistory && (
        <>
          <BlueHeaderBar text={prodName}></BlueHeaderBar>
          <div className="w-full pt-6 pb-19 px-227 bg-sub-color text-center">
            <p className="text-14 mb-14 underline text-gray-semi">{accCode}</p>
            <p className="text-26 font-extrabold mb-14">
              {parseInt(accountBalance.accBalance, 10).toLocaleString()}원
            </p>
            <MediumButton text={"이체하기"} />
          </div>
          {accountHistory.map((data, i) => {
            return <AccHistory data={data} key={i}></AccHistory>;
          })}
        </>
      )}
    </>
  );
};

export default AccHistoryPage;
