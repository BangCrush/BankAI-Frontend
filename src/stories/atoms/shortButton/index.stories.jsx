import store from "libs/store";

import { Provider } from "react-redux";
import ShortButton from "./index";

export default {
  component: ShortButton,
  title: "atoms/shortButton",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { text: "중복체크" };
