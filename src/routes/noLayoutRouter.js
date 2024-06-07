import AccHistoryPage from "stories/pages/accHistoryPage";
import AccountPage from "stories/pages/accountPage";
import FindIdPage from "stories/pages/findIdPage";
import AudioRecordPage from "stories/pages/audioRecordPage";
import FixMyInfoPage from "stories/pages/fixMyPage";
import FrontPage from "stories/pages/frontPage";
import LoanPage from "stories/pages/loanPage";
import MyPage from "stories/pages/myPage";
import ProdDetailPage from "stories/pages/prodDetailPage";
import ProductMainPage from "stories/pages/productMainPage";
import ProductPage from "stories/pages/productPage";
import PwdPage from "stories/pages/pwdPage";
import TransferAccountPage from "stories/pages/transferAccountPage";
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
  FixMyInfoPage: {
    name: "내 정보 페이지",
    path: () => "/fixMyInfo",
    component: FixMyInfoPage,
  },
  AccountPage: {
    name: "계좌 목록 페이지",
    path: () => "/account",
    component: AccountPage,
  },
  transferAccountPage: {
    name: "계좌 이체 페이지",
    path: () => "/transferAccount",
    component: TransferAccountPage,
  },
  AccHistory: {
    name: "계좌 내역 상세 페이지",
    path: () => "/accountHistory",
    component: AccHistoryPage,
  },
  PasswordPage: {
    name: "비밀번호 입력 페이지",
    path: () => "/password",
    component: PwdPage,
  },
  FindIdPage: {
    name: "아이디 찾기 페이지",
    path: () => "/findId",
    component: FindIdPage,
  },
  FrontPage: {
    name: "초기 페이지",
    path: () => "/front",
    component: FrontPage,
  },
  ProductMainPage: {
    name: "상품 메인 페이지",
    path: () => "/productMain",
    component: ProductMainPage,
  },
  product: {
    name: "상품 목록 페이지",
    path: () => "/product",
    component: ProductPage,
  },
  AudioRecordPage: {
    name: "음성 녹음 페이지",
    path: () => "/audioRecord",
    component: AudioRecordPage,
  },
};
