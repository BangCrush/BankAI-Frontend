import store from "libs/store";

import { Provider } from "react-redux";
import Warning from ".";

export default {
  component: Warning,
  title: "molecules/warning",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  title: "대출이 어렵습니다.",
  subtitle: "연소득 금액이 부족합니다.",
};
