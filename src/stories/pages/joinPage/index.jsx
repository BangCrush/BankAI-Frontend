import React, { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useLocation } from "react-router-dom";
import { useImmer } from "use-immer";

const JoinPage = () => {
  const [page, setPage] = useState(1);
  const { state } = useLocation();
  const [registForm, setRegistForm] = useImmer(state ? state.registForm : null);
  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          registForm={registForm}
          setRegistForm={setRegistForm}
        />
      )}
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          registForm={registForm}
          setRegistForm={setRegistForm}
        />
      )}
      {page === 3 && (
        <Page3 registForm={registForm} setRegistForm={setRegistForm} />
      )}
    </div>
  );
};

export default JoinPage;
