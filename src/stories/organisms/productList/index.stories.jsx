import store from "../../../lib/store";

import { Provider } from "react-redux";
import ProductList from ".";

export default {
  component: ProductList,
  title: "organisms/productList",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { text: "로그인", active: false };
