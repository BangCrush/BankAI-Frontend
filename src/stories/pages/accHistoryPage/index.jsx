import {
  useDeleteAccount,
  useGetBalanceAccount,
  useGetHistoryAccount,
} from "hooks/queries/accountQueries";
import { useLocation } from "react-router-dom";
import MediumButton from "stories/atoms/mediumButton";
import AccHistory from "stories/molecules/accHistory";
import BlueHeaderBar from "stories/molecules/blueHeaderBar";
import BottomSheet from "stories/organisms/bottomSheet";
import { useState, useEffect } from "react";
import AccountClosePage from "../bottomPages/accountClosePage";
import { PwdWindowOptions } from "constants/password";

const AccHistoryPage = () => {
  const location = useLocation();
  const accCode = location.state.accCode || "";
  const prodName = location.state.prodName || "";
  const [open, setOpen] = useState(false);

  const [closeForm, setCloseForm] = useState({
    accCode: accCode,
    accPwd: "",
  });

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        setCloseForm((draft) => {
          draft.accPwd = event.data.pwd;
          deleteAccount(closeForm);
          window.location.href = '/main';
          
        });
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setCloseForm]);

  const handleOpen = () => {
    setOpen(true);
  };

  const onPopup = () => {
   
    window.open("/password", "_blank", PwdWindowOptions);
  };

  const { mutate: deleteAccount } = useDeleteAccount(closeForm);

  const page = 1;
  const  {data:accountBalance} = useGetBalanceAccount(accCode);
  const {
    data: accountHistory,
    isLoading,
    error,
  } = useGetHistoryAccount({ accCode, page });

  const handleTransfer = () => {
    window.location.href = `/transfer?accCode=${accCode}&prodName=${prodName}`;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading account history</div>;
  return (
    <div className="w-640">
      {accountHistory && (
        <>
          <BlueHeaderBar
            text={prodName}
            handleOpen={handleOpen}
          ></BlueHeaderBar>
          <div className="w-full pt-6 pb-19 px-227 bg-sub-color text-center">
            <p className="text-14 mb-14 underline text-gray-semi">{accCode}</p>
            <p className="text-26 font-extrabold mb-14 text-nowrap">
              {parseInt(accountBalance, 10).toLocaleString()}원
            </p>
            <MediumButton text={"이체하기"} onClick={handleTransfer} />
          </div>
          {accountHistory.map((data, i) => {
            return <AccHistory data={data} key={i}></AccHistory>;
          })}
          {accountHistory.length === 0 && (
            <div className="w-full h-200 flex flex-col p-200 justify-center items-center">
              <p></p>
              <p className="text-100 text-gray-800">텅..</p>
              <p className="text-20 text-gray-semi">거래내역이 없습니다.</p>
            </div>
          )}
        </>
      )}
      <BottomSheet
        open={open}
        setOpen={setOpen}
        page={<AccountClosePage onPopup={onPopup}></AccountClosePage>}
      />
    </div>
  );
};

export default AccHistoryPage;
