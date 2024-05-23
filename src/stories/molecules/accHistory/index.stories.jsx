import store from "libs/store";

import { Provider } from "react-redux";
import AccHistory from ".";

export default {
  component: AccHistory,
  title: "molecules/accHistory",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  data: {
    hisDate: "05.14",
    hisAmount: "234,140원",
    balance: "34,345,300원",
    hisType: "#계좌이체",
    target: "임태규"
  },
  inOrOut: true
};