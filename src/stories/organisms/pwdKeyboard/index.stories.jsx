import store from "libs/store";

import { Provider } from "react-redux";
import PwdKeyboard from ".";

export default {
  component: PwdKeyboard,
  title: "organisms/pwdKeyboard",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};





