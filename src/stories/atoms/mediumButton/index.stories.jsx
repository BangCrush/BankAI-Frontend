import store from "libs/store";

import { Provider } from "react-redux";
import MediumButton from "./index";

export default {
  component: MediumButton,
  title: "atoms/mediumButton",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { text: "조회하기", sub: false };
