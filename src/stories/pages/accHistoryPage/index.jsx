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
    let options =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=400, height=540, top=200,left=200";
    window.open("http://localhost:3000/password", "_blank", options);
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
    <>
      {accountHistory && (
        <>
          <BlueHeaderBar
            text={prodName}
            handleOpen={handleOpen}
          ></BlueHeaderBar>
          <div className="w-full pt-6 pb-19 px-227 bg-sub-color text-center">
            <p className="text-14 mb-14 underline text-gray-semi">{accCode}</p>
            <p className="text-26 font-extrabold mb-14">
              {parseInt(accountBalance, 10).toLocaleString()}원
            </p>
            <MediumButton text={"이체하기"} onClick={handleTransfer} />
          </div>
          {accountHistory.map((data, i) => {
            return <AccHistory data={data} key={i}></AccHistory>;
          })}
        </>
      )}
      <BottomSheet
        open={open}
        setOpen={setOpen}
        page={<AccountClosePage onPopup={onPopup}></AccountClosePage>}
      />
    </>
  );
};

export default AccHistoryPage;
