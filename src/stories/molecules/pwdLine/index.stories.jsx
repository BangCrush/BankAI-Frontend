import store from "libs/store";

import { Provider } from "react-redux";
import PwdLine from "./index";

export default {
  component: PwdLine,
  title: "molecules/pwdLine",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { numbers:["9","8","7"]}

