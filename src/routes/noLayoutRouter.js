import LoanPage from "stories/pages/loanPage";
import MyPage from "stories/pages/myPage";
import ProdDetailPage from "stories/pages/prodDetail";
import ZipCodePage from "stories/pages/zipcodePage";

export const NO_LAYOUT_ROUTES_URL = {
  zipCodePage: {
    name: "우편번호 찾기 페이지",
    path: () => "/zipcode",
    component: ZipCodePage,
  },
  LoanPage: {
    name: "대출가입 페이지",
    path: () => "/loan",
    component: LoanPage,
  },
  ProdDetailPage: {
    name: "상품상세 페이지",
    path: () => "/product/:id",
    component: ProdDetailPage,
  },
  MyInfoPage: {
    name: "내 정보 페이지",
    path: () => "myInfo",
    component: MyPage,
  },
};
