import { useState } from "react";
import Page1 from "./page1";
import { useImmer } from "use-immer";
import Page2 from "./page2";
import { useLocation } from "react-router-dom";
import { productSubscription } from "constants/products";

const DepositPage = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const { prodCode, prodName, prodMin } = location.state || {};

  const [depositForm, setDepositForm] = useImmer(productSubscription);

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
          prodMin={prodMin}
          prodCode={prodCode}
        />
      )}
      {page === 2 && (
        <Page2 depositForm={depositForm} setDepositForm={setDepositForm} />
      )}
    </div>
  );
};

export default DepositPage;
