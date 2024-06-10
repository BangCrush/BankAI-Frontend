import { useGetAllAccount, useGetTransferAccount } from "hooks/queries/accountQueries";
import { useGetMyInfo } from "hooks/queries/userQueries";
import { Link } from "react-router-dom";
import AccountItem from "stories/molecules/accountItem";
import HeaderBar from "stories/molecules/headerBar";
import { useContext, useEffect, useMemo, useState } from "react";
import { VideoStateContext, VoiceServiceStateContext } from "App";

const TransferAccountPage = () => {
  const { data: myInfo, isLoading, error } = useGetMyInfo();
  const setSrc = useContext(VideoStateContext);
  const { result, setOptions, setType } = useContext(VoiceServiceStateContext);
  const mainAcc = myInfo?.userMainAcc;
  const { data: allAccount } = useGetAllAccount();
  const [transferAccount, setTransferAccount] = useState([]);

  useEffect(() => {
    if (allAccount) {
      setTransferAccount(
        allAccount.filter((data) => data.prodType === 'CHECKING').sort((a, _) => a.accCode === mainAcc ? -1 : 1)
      );
    }
  },[allAccount]);

  useEffect(() => {
    setSrc("/assets/selectAccount.mov");
    setType("text");
  }, []);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }


  
  return (
    <div className="pt-22 w-640">
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
        {transferAccount &&
          transferAccount.map((data, index) => (
            <Link
              key={index}
              className="cursor-pointer"
              to={"/transfer?accCode=" + data.accCode + "&prodName=" + data.prodName}

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
