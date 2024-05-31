import IdentifyPage from "stories/pages/IdentifyPage/index";
import JoinPage from "stories/pages/joinPage";
import LoginPage from "stories/pages/loginPage";
import TransferPage from "stories/pages/transferPage";

export const SUB_LAYOUT_ROUTES_URL = {
  LoginPage: {
    name: "로그인 페이지",
    path: () => "/login",
    component: LoginPage,
  },
  IdentifyPage: {
    name: "본인인증 페이지",
    path: () => "/identify",
    component: IdentifyPage,
  },
  JoinPage: {
    name: "회원가입 페이지",
    path: () => "/join",
    component: JoinPage,
  },
  TransferPage: {
    name: "계좌이체 페이지",
    path: () => "/transfer",
    component: TransferPage,
  },
};
