import { useGetAllAccount } from "hooks/queries/accountQueries";
import { useGetMyInfo } from "hooks/queries/userQueries";
import { Link } from "react-router-dom";
import AccountItem from "stories/molecules/accountItem";
import HeaderBar from "stories/molecules/headerBar";

const TransferAccountPage = () => {
  const { data: allAccount } = useGetAllAccount();
  const { data: myInfo, isLoading, error } = useGetMyInfo();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }
  const mainAcc = myInfo.userMainAcc;
  let transferAccounts = [];
  const sortedAccounts = allAccount
    ? [...allAccount].sort((a, b) => {
        if (a.accCode === mainAcc) return -1;
        if (b.accCode === mainAcc) return 1;
        return 0;
      })
    : [];
  if(sortedAccounts.length !== 0){
    transferAccounts = sortedAccounts.filter((val)=>{return val.prodType === 'CHECKING' || val.prodType === 'LOAN'})
  }

  return (
    <div className="pt-22">
      <div className="px-50">
        <HeaderBar text={"송금계좌"} />
      </div>

      <div className="bg-main-bg px-40 min-h-screen pb-50">
        <div className="pt-25 pb-16 flex justify-between items-center px-5">
          <div className="font-semibold">{myInfo.userNameKr} 님</div>
          <div className="text-14 border border-gray-placeholder bg-white px-8 py-6 rounded-20 w-fit">
            내 계좌
          </div>
        </div>
        {transferAccounts &&
          transferAccounts.map((data, index) => (
            <Link
              key={index}
              className="cursor-pointer"
              to={"/accountHistory"}
              state={{ accCode: data.accCode, prodName: data.prodName }}
            >
              <AccountItem
                data={data}
                sub={data.accCode === mainAcc ? false : true}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default TransferAccountPage;
