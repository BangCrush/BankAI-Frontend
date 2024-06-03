import { useGetAllAccount } from "hooks/queries/accountQueries";
import { Link } from "react-router-dom";
import AccountItem from "stories/molecules/accountItem";
import HeaderBar from "stories/molecules/headerBar";

const AccountPage = () => {
  const { data: allAccount } = useGetAllAccount();

  return (
    <div className="pt-22">
      <div className="px-50">
        <HeaderBar text={"전체계좌"} />
      </div>

      <div className="bg-main-bg px-40 min-h-screen">
        <div className="pt-25 pb-16 flex justify-between items-center px-5">
          <div className="font-semibold">홍길동 님</div>
          <div className="text-14 border border-gray-placeholder bg-white px-8 py-6 rounded-20 w-fit">
            내 계좌
          </div>
        </div>
        {allAccount &&
          allAccount.map((data, index) => (
            <Link
              key={index}
              className="cursor-pointer"
              to={"/accountHistory"}
              state={{ accCode: data.accCode, prodName: data.prodName }}
            >
              <AccountItem data={data} />
            </Link>
          ))}
      </div>
    </div>
  );
};
export default AccountPage;
