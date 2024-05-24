import store from "libs/store";

import { Provider } from "react-redux";
import PwdNum from "./index";

export default {
  component: PwdNum,
  title: "atoms/pwdNum",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { text:"9"}

