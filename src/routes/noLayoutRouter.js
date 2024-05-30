import LoanPage from "stories/pages/loanPage";
import ZipCodePage from "stories/pages/zipcodePage";

export const NO_LAYOUT_ROUTES_URL = {
  zipCodePage: {
    name: "상품 메인 페이지",
    path: () => "/zipcode",
    component: ZipCodePage,
  },
  LoanPage: {
    name: "대출가입 페이지",
    path: () => "/loan",
    component: LoanPage,
  },
};
