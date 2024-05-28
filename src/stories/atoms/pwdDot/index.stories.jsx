import store from "libs/store";

import { Provider } from "react-redux";
import PwdDot from "./index";

export default {
  component: PwdDot,
  title: "atoms/pwdDot",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {hasValue:true}

