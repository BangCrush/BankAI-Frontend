import { useState } from "react";
import Page1 from "./page1";
import { useImmer } from "use-immer";
import Page2 from "./page2";
import Page3 from "./page3";

const SavingsPage = () => {
  const [page, setPage] = useState(1);

  const [depositForm, setDepositForm] = useImmer({
    prodCode: "DEPOSIT",
    prodName: "펫사랑 적금",
    amount: 100000,
    userTrsfLimit: 300000,
    outAccount: "2492384239874",
    atDate: 14,
    accountPwd: null,
  });

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          depositForm={depositForm}
          setDepositForm={setDepositForm}
        />
      )}
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          depositForm={depositForm}
          setDepositForm={setDepositForm}
        />
      )}
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          depositForm={depositForm}
          setDepositForm={setDepositForm}
        />
      )}
    </div>
  );
};

export default SavingsPage;
