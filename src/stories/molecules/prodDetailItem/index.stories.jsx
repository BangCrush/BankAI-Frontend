import store from "libs/store";

import { Provider } from "react-redux";
import ProdDetailItem from ".";

export default {
  component: ProdDetailItem,
  title: "molecules/prodDetailitem",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  title: "가입기간",
  content: "1개월 이상 ~ 5년 이내 일단위"
};