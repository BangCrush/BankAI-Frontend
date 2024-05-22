import store from "libs/store";

import { Provider } from "react-redux";
import Input from "./index";

export default {
  component: Input,
  title: "atoms/input",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
Default.args = { placeholder: "중복체크" };
