import React, { useState } from "react";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page3 from "./page3";
import { useImmer } from "use-immer";
import { productSubscription } from "constants/products";
import Page2 from "./page2";
import { useLocation } from "react-router-dom";

const LoanPage = () => {
  const [page, setPage] = useState(2);
  const location = useLocation();

  const { prodCode, prodName, prodMin } = location.state || {};

  const [loanForm, setLoanForm] = useImmer(productSubscription);
  const [jobForm, setJobForm] = useImmer({
    jobName: "",
    companyName: "",
    companyAddr: "",
    companyPhone: "",
  });

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          jobForm={jobForm}
          setJobForm={setJobForm}
          moveToPage3={() => setPage(3)}
          moveToPage4={() => setPage(4)}
        />
      )}
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          jobForm={jobForm}
          setJobForm={setJobForm}
        />
      )}
      {page === 4 && (
        <Page4
          moveNextPage={moveNextPage}
          prodCode={prodCode}
          loanForm={loanForm}
          setLoanForm={setLoanForm}
        />
      )}
      {page === 5 && (
        <Page5
          moveNextPage={moveNextPage}
          prodCode={prodCode}
          loanForm={loanForm}
          setLoanForm={setLoanForm}
        />
      )}
      {page === 6 && <Page6 loanForm={loanForm} setLoanForm={setLoanForm} />}
    </div>
  );
};

export default LoanPage;
