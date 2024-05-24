import store from "libs/store";

import { Provider } from "react-redux";
import TotalAcc from "./index";

export default {
  component: TotalAcc,
  title: "molecules/totalAcc",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { assets: 153000, date: new Date().toLocaleString() };
