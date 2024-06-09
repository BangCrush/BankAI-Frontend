import IdentifyPage from "stories/pages/IdentifyPage/index";
import JoinPage from "stories/pages/joinPage";
import LoginPage from "stories/pages/loginPage";
import TransferPage from "stories/pages/transferPage";
import SavingsPage from "stories/pages/savingsPage";
import refuseLoanPage from "stories/pages/refuseLoanPage";
import DepositPage from "stories/pages/depositPage";
import CheckingPage from "stories/pages/checkingPage";
import TempPwdPage from "stories/pages/tempPwdPage";

export const SUB_LAYOUT_ROUTES_URL = {
  LoginPage: {
    name: "로그인 페이지",
    path: () => "/login",
    component: LoginPage,
  }, //화면 조정 완료
  IdentifyPage: {
    name: "본인인증 페이지",
    path: () => "/identify",
    component: IdentifyPage,
  }, //화면 조정 완료
  JoinPage: {
    name: "회원가입 페이지",
    path: () => "/join",
    component: JoinPage,
  },//화면 조정 완료
  TransferPage: {
    name: "계좌이체 페이지",
    path: () => "/transfer",
    component: TransferPage,
  },//화면 조정 완료
  SavingsPage: {
    name: "적금가입 페이지",
    path: () => "/savings",
    component: SavingsPage,
  },//화면 조정 완료
  CheckingPage: {
    name: "입출금가입 페이지",
    path: () => "/checking",
    component: CheckingPage,
  },//화면 조정 완료
  refuseLoanPage: {
    name: "대출가입 실패 페이지",
    path: () => "/impossible",
    component: refuseLoanPage,
  },
  DepositPage: {
    name: "예금가입 페이지",
    path: () => "/deposit",
    component: DepositPage,
  }, // 화면 조정 완료
  TempPwdPage: {
    name: "임시 비밀번호 발급 페이지",
    path: () => "/lostPwd",
    component: TempPwdPage,
    // 화면 조정 완료
  },
};
