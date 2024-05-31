import store from "libs/store";

import { Provider } from "react-redux";
import RepayDesc from ".";

export default {
  component: RepayDesc,
  title: "atoms/repayDesc",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
// Default.args = {}
