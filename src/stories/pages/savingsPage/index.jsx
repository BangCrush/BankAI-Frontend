import { useState } from "react";
import Page1 from "./page1";
import { useImmer } from "use-immer";
import Page2 from "./page2";
import Page3 from "./page3";

const SavingsPage = () => {
  const [page, setPage] = useState(1);

  const [depositForm, setDepositForm] = useImmer({
    prodCode: "DEPOSIT",
    amount: 100000,
    outAccount: "2492384239874",
    autoTransferte: 14,
    accountPwd: 1234,
    accTrsfLimit: 300000,
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
