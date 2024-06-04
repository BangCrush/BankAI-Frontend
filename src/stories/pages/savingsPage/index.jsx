import { useState } from "react";
import Page1 from "./page1";
import { useImmer } from "use-immer";
import Page2 from "./page2";
import Page3 from "./page3";
import { useLocation } from "react-router-dom";
import Page4 from "./page4";
import { productSubscription } from "constants/products";

const SavingsPage = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const { prodCode, prodName, prodMin } = location.state || {};

  const [savingForm, setSavingForm] = useImmer(productSubscription);

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          savingForm={savingForm}
          setSavingForm={setSavingForm}
          prodMin={prodMin}
        />
      )}
      {page === 2 && (
        <Page2 moveNextPage={moveNextPage} setSavingForm={setSavingForm} />
      )}
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          savingForm={savingForm}
          setSavingForm={setSavingForm}
          prodName={prodName}
          prodCode={prodCode}
        />
      )}
      {page === 4 && (
        <Page4 savingForm={savingForm} setSavingForm={setSavingForm} />
      )}
    </div>
  );
};

export default SavingsPage;
