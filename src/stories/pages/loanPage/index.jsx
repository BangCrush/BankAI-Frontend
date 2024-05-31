import React, { useState } from "react";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page3 from "./page3";

const LoanPage = () => {
  const [page, setPage] = useState(3);

  const [loanForm, setLoanForm] = useState({
    prodCode: "10002",
    accountPwd: "",
    amount: 0,
    atDate: 0,
    outAccount: null,
    jobName: null,
    companyName: null,
    companyAddr: null,
    companyPhone: null,
  });
  //repay
  //BULLET - 만기일시상환
  //EQUAL_INSTALLMENT - 원리금균등상환
  const mock = {
    prodCode: "",
    prodType: "",
    prodName: "",
    prodDesc: "",
    joinPeriod: "1년",
    prodMin: 1000000,
    prodMax: 100350000,
    joinMember: "",
    prodLimit: "",
    prodRateMthd: 3.5,
    prodRepay: "BULLET",
    prodCaution: "",
    prodAcc: "",
    prodPromo: "",
    prodTerms: "",
  };

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          loanForm={loanForm}
          setLoanForm={setLoanForm}
        />
      )}
      {page === 4 && <Page4 moveNextPage={moveNextPage} mock={mock} />}
      {page === 5 && <Page5 moveNextPage={moveNextPage} mock={mock} />}
      {page === 6 && <Page6 mock={mock} />}
    </div>
  );
};

export default LoanPage;
