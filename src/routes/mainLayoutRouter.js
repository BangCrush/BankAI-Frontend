import ProductPage from "stories/pages/productPage";
import MainPage from "stories/pages/mainPage";

export const MAIN_LAYOUT_ROUTES_URL = {
  product: {
    name: "상품 목록 페이지",
    path: () => "/product",
    component: ProductPage,
  },
  mainPage: {
    name: "메인 페이지",
    path: () => "/main",
    component: MainPage,
  },
};
