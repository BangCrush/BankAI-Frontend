import store from "libs/store";

import { Provider } from "react-redux";
import BottomStickyButton from ".";

export default {
  component: BottomStickyButton,
  title: "molecules/bottomStickyButton",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};