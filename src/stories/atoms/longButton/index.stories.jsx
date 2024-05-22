import store from "libs/store";

import { Provider } from "react-redux";
import LongButton from ".";

export default {
  component: LongButton,
  title: "atoms/longButton",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { text: "로그인", active: false };
