import store from "../../../lib/store";

import { Provider } from "react-redux";
import LongButton from ".";

export default {
  component: LongButton,
  title: "longButton",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};

