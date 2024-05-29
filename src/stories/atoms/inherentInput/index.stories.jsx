import store from "libs/store";

import { Provider } from "react-redux";
import InherentInput from "./index";

export default {
  component: InherentInput,
  title: "atoms/inherentInput",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
