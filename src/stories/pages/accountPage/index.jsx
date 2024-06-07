import { useGetAllAccount } from "hooks/queries/accountQueries";
import { useGetMyInfo } from "hooks/queries/userQueries";
import { Link } from "react-router-dom";
import AccountItem from "stories/molecules/accountItem";
import HeaderBar from "stories/molecules/headerBar";

const AccountPage = () => {
  const { data: allAccount } = useGetAllAccount();
  const { data: myInfo, isLoading, error } = useGetMyInfo();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const mainAcc = myInfo?.userMainAcc;
  const sortedAccounts = allAccount
    ? [...allAccount].sort((a, b) => {
        if (!mainAcc) return 0; // No specific sorting if mainAcc is undefined
        if (a.accCode === mainAcc) return -1;
        if (b.accCode === mainAcc) return 1;
        return 0;
      })
    : [];

  return (
    <div className="pt-22">
      <div className="px-50">
        <HeaderBar text={"전체계좌"} />
      </div>

      <div className="bg-main-bg px-40 min-h-screen pb-50">
        <div className="pt-25 pb-16 flex justify-between items-center px-5">
          <div className="font-semibold">
            {myInfo?.userNameKr || "사용자"} 님
          </div>
          <div className="text-14 border border-gray-placeholder bg-white px-8 py-6 rounded-20 w-fit">
            내 계좌
          </div>
        </div>
        {sortedAccounts &&
          sortedAccounts.map((data, index) => (
            <Link
              key={index}
              className="cursor-pointer"
              to={"/accountHistory"}
              state={{ accCode: data.accCode, prodName: data.prodName }}
            >
              <AccountItem
                data={data}
                sub={mainAcc && data.accCode !== mainAcc}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AccountPage;
