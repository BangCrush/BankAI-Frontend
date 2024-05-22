import store from "../../../lib/store";

import { Provider } from "react-redux";
import accHistory from ".";

export default {
  component: accHistory,
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
  sub: false
};