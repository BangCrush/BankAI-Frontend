import store from "libs/store";

import { Provider } from "react-redux";
import ProdContainer from ".";

export default {
  component: ProdContainer,
  title: "organisms/prodContainer",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  title: "마이메뉴",
  data: ["입출금", "예금", "적금", "대출"],
};
