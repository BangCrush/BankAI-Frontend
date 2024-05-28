import store from "libs/store";

import { Provider } from "react-redux";
import PwdDots from ".";

export default {
  component: PwdDots,
  title: "molecules/pwdDots",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {
  input: "12",
};