import IdentifyPage from "stories/pages/IdentifyPage/index";
import LoginPage from "stories/pages/loginPage";
import AccHistoryPage from "stories/pages/accHistoryPage";

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
};
