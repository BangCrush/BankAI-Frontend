import store from "libs/store";

import { Provider } from "react-redux";
import Title from "./index";

export default {
  component: Title,
  title: "atoms/title",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { text1: "이름을", text2: "입력해주세요" };
