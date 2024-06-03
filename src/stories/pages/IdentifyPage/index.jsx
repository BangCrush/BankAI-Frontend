import React, { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useImmer } from "use-immer";

const IdentifyPage = () => {
  const [page, setPage] = useState(1);
  const [identifyForm, setIdentifyForm] = useImmer({
    userName: "",
    userInherentNumber: "",
    userPhone: "",
  });

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          identifyForm={identifyForm}
          setIdentifyForm={setIdentifyForm}
        />
      )}
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          identifyForm={identifyForm}
          setIdentifyForm={setIdentifyForm}
        />
      )}
      {page === 3 && (
        <Page3 identifyForm={identifyForm} setIdentifyForm={setIdentifyForm} />
      )}
    </div>
  );
};

export default IdentifyPage;
