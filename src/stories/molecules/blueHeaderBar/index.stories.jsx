import store from "libs/store";

import { Provider } from "react-redux";
import BlueHeaderBar from ".";

export default {
  component: BlueHeaderBar,
  title: "molecules/blueheaderBar",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = {text: "하이"}