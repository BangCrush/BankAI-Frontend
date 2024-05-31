import { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useImmer } from "use-immer";

const TransferPage = () => {
  const [page, setPage] = useState(1);

  const accBal = 89523400;

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const [transferForm, setTransferForm] = useImmer({
    inAccCode: "",
    inBankCode: "C04",
    outAccCode: "",
    outBankCode: "C04",
    amount: 0,
  });

  const [accInfo, setAccInfo] = useImmer({
    accCode: "",
    userName: "",
  });

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accBal={accBal}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
        />
      )}
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accBal={accBal}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
        />
      )}
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accBal={accBal}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
        />
      )}
    </div>
  );
};

export default TransferPage;
