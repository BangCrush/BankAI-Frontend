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
    hisDateTime: "2024-05-29T12:34:56",
    hisType: "계좌이체",
    target: "임태규",
    hisAmount: 450000,
    balance: 54410400
  }
};