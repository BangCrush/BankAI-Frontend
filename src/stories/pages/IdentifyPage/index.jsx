import React, { useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useImmer } from "use-immer";

const IdentifyPage = () => {
  const [page, setPage] = useState(1);
  const [registForm, setRegistForm] = useImmer({
    userId: "",
    userPwd: "",
    userRePwd: "",
    userNameKr: "",
    userNameEn: "",
    userInherentNumber: "",
    userPhone: "",
    userAddr: "",
    userAddrDetail: "",
    userEmail: "",
  });

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

export default IdentifyPage;
