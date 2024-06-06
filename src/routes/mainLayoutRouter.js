import { redirect } from "react-router-dom";
import MainPage from "stories/pages/mainPage";

export const MAIN_LAYOUT_ROUTES_URL = {
  index:{
    name: "index",
    path: () => "/",
    component: ()=>{window.location.href = "/front"},
  },
  mainPage: {
    name: "메인 페이지",
    path: () => "/main",
    component: MainPage,
  },
};
