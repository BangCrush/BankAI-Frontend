import React, { useState } from "react";
import Page1 from "./page1";

const LoanPage = () => {
  const [page, setPage] = useState(1);
  const mock = {
    prodCode: "",
    prodType: "",
    prodName: "",
    prodDesc: "",
    joinPeriod: "",
    prodMin: 1000000,
    prodMax: 100350000,
    joinMember: "",
    prodLimit: "",
    prodRateMthd: 3.5,
    prodRepay: "",
    prodCaution: "",
    prodAcc: "",
    prodpromo: "",
    prodTerms: "",
  };

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 1 && <Page1 moveNextPage={moveNextPage} mock={mock} />}
      {/* {page === 2 && <Page2 moveNextPage={moveNextPage} mock={mock} />} */}
      {/* {page === 3 && <Page3 mock={mock} />} */}
    </div>
  );
};

export default LoanPage;
