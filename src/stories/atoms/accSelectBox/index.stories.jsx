import store from "libs/store";

import { Provider } from "react-redux";
import AccSelectBox from ".";

export default {
  component: AccSelectBox,
  title: "atoms/accSelectBox",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
// Default.args = {}
