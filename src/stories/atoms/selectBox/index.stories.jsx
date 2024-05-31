import store from "libs/store";

import { Provider } from "react-redux";
import SelectBox from ".";

export default {
  component: SelectBox,
  title: "atoms/selectBox",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
