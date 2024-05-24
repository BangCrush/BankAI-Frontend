import store from "libs/store";

import { Provider } from "react-redux";
import HeaderBar from ".";

export default {
  component: HeaderBar,
  title: "molecules/headerBar",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {text: "하이"}